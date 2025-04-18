import { UserCLI } from "../controllers/UserCli";


const [name] = process.argv.slice(2);
if (!name) {
    console.error("required arguments: firstName");
    process.exit(1);
}  
new UserCLI().execute("find", [name])
  .catch(err => console.error("Error:", err.message));