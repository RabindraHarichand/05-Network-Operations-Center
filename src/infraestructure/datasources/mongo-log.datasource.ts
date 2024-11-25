import { LogModel } from "../../data/mongo";
import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";

export class MongoLogDatasource implements LogDatasource {
  async saveLog(log: LogEntity): Promise<void> {
    const newLog = await LogModel.create(log);
    await newLog.save();
    console.log("MongoLog created:", newLog.id);
  }

  async getLogs(serverityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    const logs = await LogModel.find({
      level: serverityLevel,
    });

    return logs.map((mongoLog) => LogEntity.fromObject(mongoLog));
  }
}
