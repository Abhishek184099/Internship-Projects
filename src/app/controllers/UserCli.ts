import { UserService } from "../UserService";
import { User } from "../User";

export class UserCLI {
  constructor(private service = new UserService()) {}

  async execute(command: string, args: string[]) {
    if (command === "create") {
      return this.handleCreate(args);
    } else if (command === "delete") {
      return this.handleDelete(args);
    } else if (command === "list") {
      return this.handleList();
    } else if (command === "find") {
      return this.handleFind(args);
    } else {
      throw new Error(`Unknown command: ${command}`);
    }
  }

  private async handleCreate([firstName, lastName]: string[]) {
    if (!firstName || !lastName) {
      throw new Error("First name and last name are required");
    }
    const user = await this.service.create(new User(firstName, lastName));
    console.log(`Created user: ${user.fullName}`);
  }

  private async handleDelete([name]: string[]) {
    const count = await this.service.delete({ firstName: name });
    console.log(`Deleted user.`);
  }

  private async handleList() {
    const users = await this.service.findAll();
    console.log(users.map((u) => u.fullName).join('\n') || "No users found");
  }

  private async handleFind([name]: string[]) {
    const users = await this.service.find({ firstName : name});
    if (users.length === 0) {
      console.log(`No user found with name: ${name}`);
    } else {
      console.log(users.map((u) => u.fullName).join("\n"));
    }
  }
}
