const { keccak256, encodeAbiParameters } = require('viem');
const {
  OrchestratorFactory_v1,
  Orchestrator_v1,
  ModuleFactory_v1,
} = require('generated');
const { getMetadataId } = require('./utils');
const { workflowModules } = require('./constants');

OrchestratorFactory_v1.OrchestratorCreated.contractRegister(
  ({ event, context }) => {
    context.addOrchestrator_v1(event.params.orchestratorAddress);
  }
);

ModuleFactory_v1.MetadataRegistered.handler(
  async ({ event, context }) => {
    const [majorVersion, minorVersion, url, name] =
      event.params.metadata;
    const newModuleType = {
      id: getMetadataId(event.params.metadata),
      majorVersion,
      minorVersion,
      url,
      name,
      beacon: event.params.beacon,
    };
    context.WorkflowModuleType.set(newModuleType);
  }
);

ModuleFactory_v1.ModuleCreated.contractRegister(
  ({ event, context }) => {
    const [, , , name] = event.params.metadata;

    if (workflowModules.fundingManager.bondingCurve.includes(name)) {
      console.log('hi');
    }
  }
);

ModuleFactory_v1.ModuleCreated.handler(async ({ event, context }) => {
  const newModule = {
    id: event.params.m.toString(),
    orchestrator: event.params.orchestrator,
    moduleType_id: getMetadataId(event.params.metadata),
  };
  context.WorkflowModule.set(newModule);
});

// Orchestrator_v1.OrchestratorInitialized.handler(
//   async ({ event, context }) => {
//     const newWorkflow = {
//       id: event.srcAddress.toString(),
//       orchestratorId: event.params.orchestratorId_,
//       fundingManager_id: event.params.fundingManager,
//       authorizer_id: event.params.authorizer,
//       paymentProcessor_id: event.params.paymentProcessor,
//       optionalModules: event.params.optionalModules,
//     };
//     context.Workflow.set(newWorkflow);
//   }
// );

// ERC20Contract.Approval.loader(({ event, context }) => {
//   // loading the required Account entity
//   context.Account.load(event.params.owner);
// });

// ERC20Contract.Approval.handler(({ event, context }) => {
//   //  getting the owner Account entity
//   let ownerAccount = context.Account.get(event.params.owner);

//   if (ownerAccount === undefined) {
//     // It's possible to call the approve function without having a balance of the token and hence the account doesn't exist yet

//     // create the account
//     let accountObject = {
//       id: event.params.owner,
//       balance: BigInt(0),
//     };

//     context.Account.set(accountObject);
//   }
//   let approvalId = event.params.owner + "-" + event.params.spender;

//   let approvalObject = {
//     id: approvalId,
//     amount: event.params.value,
//     owner_id: event.params.owner,
//     spender_id: event.params.spender,
//   };

//   // this is the same for create or update as the amount is overwritten
//   context.Approval.set(approvalObject);
// });

// ERC20Contract.Transfer.loader(({ event, context }) => {
//   context.Account.load(event.params.from);
//   context.Account.load(event.params.to);
// });

// ERC20Contract.Transfer.handler(({ event, context }) => {
//   let senderAccount = context.Account.get(event.params.from);

//   if (senderAccount === undefined) {
//     // create the account
//     // This is likely only ever going to be the zero address in the case of the first mint
//     let accountObject = {
//       id: event.params.from,
//       balance: BigInt(0) - event.params.value,
//     };

//     context.Account.set(accountObject);
//   } else {
//     // subtract the balance from the existing users balance
//     let accountObject = {
//       id: senderAccount.id,
//       balance: senderAccount.balance - event.params.value,
//     };
//     context.Account.set(accountObject);
//   }

//   // getting the sender Account entity
//   let receiverAccount = context.Account.get(event.params.to);

//   if (receiverAccount === undefined) {
//     // create new account
//     let accountObject = {
//       id: event.params.to,
//       balance: event.params.value,
//     };
//     context.Account.set(accountObject);
//   } else {
//     // update existing account
//     let accountObject = {
//       id: receiverAccount.id,
//       balance: receiverAccount.balance + event.params.value,
//     };

//     context.Account.set(accountObject);
//   }
// });
