import { eventLog, handlerContext } from 'generated'
import { Role_t } from 'generated/src/db/Entities.gen'
import { Writable } from 'type-fest'

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
    role: string
  }

  prevData?: Role_t
}) => {
  const { chainId } = event
  const module_id = properties.module_id
  const role = properties.role
  const id = `${module_id}-${role}`

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
    } satisfies Pick<Role_t, 'id' | 'chainId'>)

  // If required fields are present, update the role
  const result = {
    ...data,
    ...properties,
  }

  context.Role.set(result)
}
