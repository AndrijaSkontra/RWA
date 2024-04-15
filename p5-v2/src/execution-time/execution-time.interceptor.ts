import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class ExecutionTimeInterceptor implements NestInterceptor {

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    console.log('Before request ...');

   const now = Date.now();

    return next.handle().pipe(
      tap(() => console.log(`after request... ${Date.now() - now}'`)),
    );
  }
}
