const assert = require("assert");
const { TestHelpers } = require("generated");
const { MockDb, Addresses, OrchestratorFactory_v1 } = TestHelpers;

describe("OrchestratorCreation", () => {
  it("adds new orchestrator to db", () => {
    const mockDbEmpty = MockDb.createMockDb();
    const mockOrchestratorEntity = {
      id: 0n,
      address: Addresses.mockAddresses[0],  
    };
    const mockDb = mockDbEmpty.entities.Orchestrator.set(mockOrchestratorEntity);

    const orchestratorAddress = Addresses.mockAddresses[2];
    const mockCreation = OrchestratorFactory_v1.OrchestratorCreated.createMockEvent({
      orchestratorId: 1n,
      orchestratorAddress
    });

    const mockDbAfterTransfer = OrchestratorFactory_v1.OrchestratorCreated.processEvent({
      event: mockCreation,
      mockDb,
    });

    const allOrchestrators = mockDbAfterTransfer.entities.Orchestrator.getAll()
    assert.equal(
      allOrchestrators.length,
      2,
      "Adds db entry",
    );
    const newOrchestrator = mockDbAfterTransfer.entities.Orchestrator.get(1n)
    assert.equal(
      newOrchestrator.address,
      orchestratorAddress,
      "Stores orchestrator with correct address",
    );
  });
});
