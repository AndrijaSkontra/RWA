import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {

    for (let i = 0; i < 3000000000; i++) {
      // waste time
    }

    return 'Hello World!';
  }
}
