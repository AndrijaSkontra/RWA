import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExecutionTimeInterceptor } from './execution-time/execution-time.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}
bootstrap();
