import { IRepository } from '../interface/users/users.interface';

export abstract class Repository<T> implements IRepository<T> {
  abstract create(entity: T): Promise<T>;
  abstract findAll(): Promise<T[]>;
  abstract find(criteria: Partial<T>): Promise<T[]>;
  abstract delete(criteria: Partial<T>): Promise<boolean>;

  protected matches(entity: T, criteria: Partial<T>): boolean {
    for (const key in criteria) {
      if (criteria[key] !== undefined && entity[key] !== criteria[key]) {
        return false;
      }
    }
    return true;
  }
  
}
