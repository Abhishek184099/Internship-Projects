 import { IRepository, IService } from "../interface/users/users.interface"

export abstract class Service<T> implements IService<T> {

constructor (protected repository: IRepository<T>) {}

    abstract create(entity: T): Promise<T>;
    abstract findAll(): Promise<T[]>;
    abstract find(criteria: Partial<T>): Promise<T[]>;
    abstract delete(criteria: Partial<T>): Promise<boolean>;

}