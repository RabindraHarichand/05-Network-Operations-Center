import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { LogRepositoryImpl } from "./log.repository.impl";

describe("LogRespositoryImpl", () => {
  const mockLogDatasource: LogDatasource = {
    saveLog: jest.fn(),

    getLogs: jest.fn(),
  };

  const logRespository = new LogRepositoryImpl(mockLogDatasource);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("saveLog should call the datasource with arguments", async () => {
    const log = {
      level: LogSeverityLevel.high,
      message: "Hola",
    } as LogEntity;

    await logRespository.saveLog(log);

    expect(mockLogDatasource.saveLog).toHaveBeenCalledWith(log);
  });

  test("gestLogs should call the datasource with arguments", async () => {
    const logSeverity = LogSeverityLevel.low;
    await logRespository.getLogs(logSeverity);

    expect(mockLogDatasource.getLogs).toHaveBeenCalledWith(logSeverity);
  });
});
