import { envs } from "./config/plugins/envs";
import { Server } from "./presentation/server";
(async () => {
  main();
})();

function main() {
  Server.start();
  // console.log(envs);
}
