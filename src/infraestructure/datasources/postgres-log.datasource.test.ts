import { PrismaClient } from "@prisma/client";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { PostgresLogDatasource } from "./postgres-log.datasource";

describe("PostgresLogDatasource testing", () => {
  const prisma = new PrismaClient();
  const logDatasource = new PostgresLogDatasource();
  const log = new LogEntity({
    level: LogSeverityLevel.medium,
    message: "test message",
    origin: "postgres-log.datasource.ts",
  });

  afterEach(async () => {
    await prisma.logModel.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  test("should create a log", async () => {
    const logSpy = jest.spyOn(console, "log");

    await logDatasource.saveLog(log);

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith("Postgres saved");
  });

  test("should get logs", async () => {
    await logDatasource.saveLog(log);
    await logDatasource.saveLog(log);

    const logs = await logDatasource.getLogs(LogSeverityLevel.medium);

    expect(logs.length).toBe(2);
    expect(logs[0].level).toBe(LogSeverityLevel.medium);
  });
});
