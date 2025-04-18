import { Service } from "./abstracts/Service";
import { User } from "./User";
import { UserRepository } from "./UserRepository";

export class UserService extends Service<User> {

    constructor (repository = new UserRepository()) {
        super(repository);
    }

    async create(user: User): Promise<User> {
        return this.repository.create(user);
      }
    

    async findAll() : Promise<User[]> {
       return this.repository.findAll();
    }

    async find(criteria: Partial<User>): Promise<User[]> {
        return this.repository.find(criteria);
      }
    
      async delete(criteria: Partial<User>): Promise<boolean> {
        return this.repository.delete(criteria);
      }
}