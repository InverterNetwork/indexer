// const assert = require('assert');
// const { TestHelpers } = require('generated');
// const {
//   MockDb,
//   Addresses,
//   OrchestratorFactory_v1,
//   ModuleFactory_v1,
// } = TestHelpers;

// describe('OrchestratorCreation', () => {
//   // it('indexes OrchestratorCreated', () => {
//   //   // prepare db
//   //   const mockDbEmpty = MockDb.createMockDb();
//   //   const mockOrchestratorEntity = {
//   //     id: Addresses.mockAddresses[0],
//   //     orchestratorId: 0n,
//   //     fundingManager: Addresses.mockAddresses[1],
//   //     authorizer: Addresses.mockAddresses[2],
//   //   };
//   //   const mockDb = mockDbEmpty.entities.Orchestrator.set(
//   //     mockOrchestratorEntity
//   //   );
//   //   // prepare event
//   //   const orchestratorAddress = Addresses.mockAddresses[1];
//   //   const mockCreation =
//   //     OrchestratorFactory_v1.OrchestratorCreated.createMockEvent({
//   //       orchestratorId: 1n,
//   //       orchestratorAddress,
//   //     });
//   //   // process event
//   //   const mockDbAfterTransfer =
//   //     OrchestratorFactory_v1.OrchestratorCreated.processEvent({
//   //       event: mockCreation,
//   //       mockDb,
//   //     });
//   //   // assert
//   //   const allOrchestrators =
//   //     mockDbAfterTransfer.entities.Orchestrator.getAll();
//   //   assert.equal(allOrchestrators.length, 2, 'Adds db entry');
//   //   const newOrchestrator =
//   //     mockDbAfterTransfer.entities.Orchestrator.get(
//   //       Addresses.mockAddresses[1]
//   //     );
//   //   assert.equal(
//   //     newOrchestrator.id,
//   //     orchestratorAddress,
//   //     'Stores orchestrator with correct address'
//   //   );
//   // });
//   it('indexes OrchestratorConfigured', () => {
//     console.log(1);
//     const mockDbEmpty = MockDb.createMockDb();
//     const mockEntity = {
//       id: 'abc',
//       majorVersion: 1n,
//       minorVersion: 2n,
//       url: 'example_url',
//       name: 'example_name',
//     };
//     const mockDb = mockDbEmpty.entities.ModuleType.set(mockEntity);
//     const mockEvent =
//       ModuleFactory_v1.MetadataRegistered.createMockEvent({
//         id: 'def',
//         majorVersion: 1n,
//         minorVersion: 4n,
//         url: 'example_url_2',
//         name: 'example_name_2',
//       });
//     const mockDbAfterTransfer =
//       ModuleFactory_v1.MetadataRegistered.processEvent({
//         event: mockEvent,
//         mockDb,
//       });
//     console.log(mockDbAfterTransfer);
//   });
// });
