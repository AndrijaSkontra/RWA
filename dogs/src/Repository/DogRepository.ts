import { Dog } from '../DataModel/Dog';
import { Injectable } from '@nestjs/common';


@Injectable()
export class DogRepository {
  dogsList: Dog[] = [];

  createDog(dog: Dog) {
    this.dogsList.push(dog);
  }

  getDogs() {
    return this.dogsList;
  }

  getDogById(id: number) {
    return this.dogsList.find(dog => dog.id === id);
  }

  deleteDog(name: string) {
    let index = this.dogsList.findIndex(dog => dog.name === name);
    let dog = this.dogsList[index]
    this.dogsList = this.dogsList.filter(dog => dog.name !== name);
    return dog;
  }
}
