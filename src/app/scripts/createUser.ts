import { UserCLI } from "../controllers/UserCli";

const [firstName, lastName] = process.argv.slice(2);
if (!firstName || !lastName) {
  console.error("required arguments: firstName, lastName");
  process.exit(1);
}

new UserCLI().execute("create", [firstName, lastName])
  .catch(err => console.error("Error:", err.message));