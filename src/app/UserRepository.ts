import { Repository } from "./abstracts/Repository";
import { User } from "./User";
import fs from "fs/promises";

export class UserRepository extends Repository<User> {
    private storagePath = "./users.json";

    async create(user: User): Promise<User> {
        const users = await this.findAll();
        users.push(user);
        await this.saveToFile(users);
        return user;
    }

    async findAll(): Promise<User[]> {
        try {
            const data = await fs.readFile(this.storagePath, "utf-8");
            return JSON.parse(data) .map((u : User)=> new User(u.firstName, u.lastName));
        } catch (error) {
            return [];
        }
    }

    async find(criteria: Partial<User>): Promise<User[]> {
        const users = await this.findAll();
        return users.filter(user => this.matches(user, criteria));
    }

    async delete(criteria: Partial<User>): Promise<boolean> {
        const users = await this.findAll();
        const filtered = users.filter(user => !this.matches(user, criteria));
        const deletedCount = users.length - filtered.length;
    
        if (deletedCount > 0) {
            await this.saveToFile(filtered);
            return true;
        }
        return false;
    }
    

    private async saveToFile(users: User[]): Promise<void> {
        await fs.writeFile(this.storagePath, JSON.stringify(users, null, 2));
    }
}






