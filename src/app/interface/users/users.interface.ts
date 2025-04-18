export interface IUser {
    firstName: string;
    lastName: string;
}

export interface IRepository<T> {
   create(enitiy : T): Promise<T>;
   findAll(): Promise<T[]>;
   delete(criteria: Partial<T>): Promise<boolean>;
   find(criteria: Partial<T>): Promise<T[]>;
}

export interface IService<T> {
    create(entity: T): Promise<T>;
    findAll(): Promise<T[]>;
    find(criteria: Partial<T>): Promise<T[]>;
    delete(criteria: Partial<T>): Promise<boolean>;
  }
  
