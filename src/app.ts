import { envs } from "./config/plugins/envs";
import { LogModel, MongoDatabase } from "./data/mongo";
import { Server } from "./presentation/server";
(async () => {
  main();
})();

async function main() {
  await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });

  Server.start();

  //Crear una collecion = tabla en BD relacional, documento = row o registro en BD relacional
  // const newLog = await LogModel.create({
  //   message: "Test message desde Mongo",
  //   origin: "App.ts",
  //   level: "low",
  // });

  // await newLog.save();
  // console.log(newLog);
  // const logs = await LogModel.find();
  // console.log(logs);

  // console.log(envs);
}
