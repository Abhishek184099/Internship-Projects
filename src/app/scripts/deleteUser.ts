import { UserCLI } from "../controllers/UserCli";

const [firstName] = process.argv.slice(2);
if (!firstName) {
    console.error("required arguments: firstName");
    process.exit(1);
}

new UserCLI().execute("delete", [firstName])
  .catch(err => console.error("Error:", err.message));