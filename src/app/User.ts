import  {IUser}  from './interface/users/users.interface'

export class User implements IUser {
    constructor(
      public firstName: string,
      public lastName: string
    ) {}
  
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }