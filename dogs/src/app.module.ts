import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsController } from './dogs/dogs.controller';
import { DogRepository } from './Repository/DogRepository';

@Module({
  imports: [],
  controllers: [AppController, DogsController],
  providers: [AppService, DogRepository],
})
export class AppModule {}
