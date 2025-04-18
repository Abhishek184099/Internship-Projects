import { UserCLI } from "../controllers/UserCli";


new UserCLI().execute("list", [])
.catch(err => console.error("Error:", err.message));
 