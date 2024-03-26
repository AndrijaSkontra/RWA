import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LogMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Request...');
    console.log(req.method);
    console.log(req.body);

    console.log('Response...');
    res.on('finish', () => {
      console.log(res.statusCode);
    });
    next();
  }
}
