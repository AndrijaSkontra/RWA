import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { ExecutionTimeInterceptor } from './execution-time/execution-time.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(new ExecutionTimeInterceptor())
  getHello(): string {
    return this.appService.getHello();
  }
}
