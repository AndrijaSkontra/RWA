import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch()
export class MyCustomExceptionFIlter implements ExceptionFilter{
  catch(exception: unknown, host: ArgumentsHost): any {
    console.log('MyCustomExceptionFilter ->', exception);
  }
}
