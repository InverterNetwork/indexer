import { eventLog, handlerContext } from 'generated'
import { Role_t } from 'generated/src/db/Entities.gen'
import { Writable } from 'type-fest'
import { encodePacked, keccak256 } from 'viem'
import { knownRoles } from './constants'

export const updateRole = async ({
  event,
  context,
  properties,
  prevData,
}: {
  event: eventLog<any>
  context: handlerContext
  properties: Partial<Omit<Role_t, 'chainId' | 'id' | 'role'>> & {
    module_id: string
    roleGen: string
    recipient: string
  }

  prevData?: Role_t
}) => {
  const { chainId } = event
  const module_id = properties.module_id
  const roleGEN = properties.roleGen
  const recipient = properties.recipient
  const id = `${chainId}-${roleGEN}-${recipient}`

  const data =
    // PREVIOUS DATA
    // --------------------------------------------------------------------------
    prevData ||
    ((await context.Role.get(id)) as Writable<Role_t>) ||
    // DEFAULT STATE
    // --------------------------------------------------------------------------
    ({
      id,
      chainId,
      module_id,
    } satisfies Pick<Role_t, 'id' | 'chainId' | 'module_id'>)

  let derivedRole: {
    role: string
    roleName: string
  } | null = null

  if (!data.role || !data.roleName) {
    const AutRoles = (await context.AutRoles.get(module_id))!
    const possibleModuleAddresses = await getRoleBaringModuleAddress(
      context,
      AutRoles.workflow_id
    )

    const derivedRoleResult = deriveRoleFromPossibleModuleAddresses(
      possibleModuleAddresses,
      roleGEN
    )

    if (derivedRoleResult) {
      derivedRole = {
        role: derivedRoleResult.hex,
        roleName: derivedRoleResult.name,
      }
    }
  }

  // If required fields are present, update the role
  const result = {
    ...data,
    ...properties,
    ...derivedRole,
  }

  if (result.role && result.roleName) {
    context.Role.set(result)
  }
}

export const getRoleBaringModuleAddress = async (
  context: handlerContext,
  workflow_id: string
) => {
  const workflow = (await context.Workflow.get(workflow_id))!

  const possibleModuleAddresses = [
    workflow.fundingManager_id.split('-')[0],
    workflow.paymentProcessor_id.split('-')[0],
    ...(workflow.optionalModules ?? []),
  ]

  return possibleModuleAddresses
}

export function generateRoleId(moduleAddress: string, role: string) {
  return keccak256(
    encodePacked(
      ['address', 'bytes32'],
      [moduleAddress as `0x${string}`, role as `0x${string}`]
    )
  ) as string
}

export function deriveRole(moduleAddress: string, generatedRole: string) {
  const possibleMatches = knownRoles.map((i) => {
    const mather = generateRoleId(moduleAddress as `0x${string}`, i.hex)
    if (mather === generatedRole) return i
    return null
  })

  const derivedRole = possibleMatches.find((i) => i !== null) ?? null

  return derivedRole
}

export function deriveRoleFromPossibleModuleAddresses(
  possibleModuleAddresses: string[],
  generatedRole: string
) {
  const possibleMatches = possibleModuleAddresses.map((i) =>
    deriveRole(i as `0x${string}`, generatedRole as `0x${string}`)
  )

  const derivedRole = possibleMatches.find((i) => i !== null) ?? null

  return derivedRole
}
