import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { DogRepository } from '../Repository/DogRepository';
import { CreateDogDto } from '../DataModel/CreateDogDto';
import { Dog } from '../DataModel/Dog';
import { response } from 'express';

@Controller('dogs')
export class DogsController {

  constructor(private repository: DogRepository) {}

  @Get()
  findAll() {
    return this.repository.getDogs();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.repository.getDogById(parseInt(id));
  }

  @Post()
  create(@Body() createDogDto: CreateDogDto) {
    let dog = new Dog(createDogDto.name, createDogDto.email, createDogDto.age);
    this.repository.createDog(dog);
  }

  /**
   * Creates a dog using query parameters
   */
  @Post('query')
  createQueryParams(@Query('name') name: string, @Query('email') email: string, @Query('age') age: number) {

    console.log(name, email, age);
    let dog = new Dog(name, email, age);
    this.repository.createDog(dog);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    let dog = this.repository.deleteDog(name);
    if (!dog) {
      return response.status(404);
    }
  }
}
