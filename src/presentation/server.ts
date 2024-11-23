import { CronService } from "./cron/cron-service";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDatasource } from "../infraestructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infraestructure/repositories/log.repository.impl";
import { EmailService } from "./email/email.service";
import { htmlBody } from "./email/email-template/email-template";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { MongoLogDatasource } from "../infraestructure/datasources/mongo-log.datasource";
import { LogSeverityLevel } from "../domain/entities/log.entity";

const logRepository = new LogRepositoryImpl(
  new FileSystemDatasource()
  // new MongoLogDatasource()
);

const emailService = new EmailService();

export class Server {
  public static async start() {
    console.log("Server started...");

    const logs = await logRepository.getLogs(LogSeverityLevel.medium);
    console.log(logs);

    //Mandar Email
    // new SendEmailLogs(emailService, fileSystemLogRepository).execute([
    //   "sistemabasesdedatos1@gmail.com",
    // ]);
    // emailService.sendEmailWithFileSystemLogs([
    //   "sistemabasesdedatos1@gmail.com",
    // ]);
    // CronService.createJob("*/5 * * * * *", () => {
    //   const url = "https://google.com";
    //   // const url = "http://localhost:3000";
    //   new CheckService(
    //     logRepository,
    //     () => console.log(`${url} is ok`),
    //     (error) => console.log(error)
    //   ).execute(url);
    //   //   new CheckService().execute("http://localhost:3000");
    // });
  }
}
