import { LogEntity, LogSeverityLevel } from "../entities/log.entity";
import { LogDatasource } from "./log.datasource";

describe("log.datasource.ts LogDatasource", () => {
  const newLog = new LogEntity({
    origin: "log.datasource.test.ts",
    message: "test message",
    level: LogSeverityLevel.low,
  });
  class MockLogDatasouce implements LogDatasource {
    async saveLog(log: LogEntity): Promise<void> {
      return;
    }
    async getLogs(serverityLevel: LogSeverityLevel): Promise<LogEntity[]> {
      return [newLog];
    }
  }

  test("should test the abstract class", async () => {
    const mockLogDatasouce = new MockLogDatasouce();

    expect(mockLogDatasouce).toBeInstanceOf(MockLogDatasouce);
    expect(typeof mockLogDatasouce.saveLog).toBe("function");
    expect(typeof mockLogDatasouce.getLogs).toBe("function");

    await mockLogDatasouce.saveLog(newLog);
    const logs = await mockLogDatasouce.getLogs(LogSeverityLevel.high);

    expect(logs).toHaveLength(1);
    expect(logs[0]).toBeInstanceOf(LogEntity);
  });
});
