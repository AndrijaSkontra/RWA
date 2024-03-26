import { CreateDogDto } from './CreateDogDto';

export class Dog extends CreateDogDto {
  static cntId: number = 1;
  public id; number;

  constructor(name: string, email: string, age: number) {
    super();
    this.name = name;
    this.email = email;
    this.age = age;
    this.id = Dog.cntId++;
    console.log(Dog.cntId)
  }
}
