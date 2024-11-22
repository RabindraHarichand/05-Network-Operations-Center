import { CronService } from "./cron/cron-service";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDatasource } from "../infraestructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infraestructure/repositories/log.repository.impl";

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource()
);

export class Server {
  public static start() {
    //Mandar Email
    // console.log("Server started...");
    // CronService.createJob("*/5 * * * * *", () => {
    //   const url = "https://google.com";
    //   // const url = "http://localhost:3000";
    //   new CheckService(
    //     fileSystemLogRepository,
    //     () => console.log(`${url} is ok`),
    //     (error) => console.log(error)
    //   ).execute(url);
    //   //   new CheckService().execute("http://localhost:3000");
    // });
  }
}
