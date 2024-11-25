import { PrismaClient, SeverityLevel } from "@prisma/client";
import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";

const severityEnum = {
  high: SeverityLevel.HIGH,
  low: SeverityLevel.LOW,
  medium: SeverityLevel.MEDIUM,
};

const prismaClient = new PrismaClient();

export class PostgresLogDatasource implements LogDatasource {
  async saveLog(log: LogEntity): Promise<void> {
    const newLog = await prismaClient.logModel.create({
      data: {
        ...log,
        level: severityEnum[log.level],
      },
    });
    console.log("Postgres saved");
  }
  async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    const logs = await prismaClient.logModel.findMany({
      where: { level: severityEnum[severityLevel] },
    });

    return logs.map((postresLog) => LogEntity.fromObject(postresLog));
  }
}
