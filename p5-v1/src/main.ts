import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ChinaBlockerGuard } from './china-blocker/china-blocker.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalGuards(new ChinaBlockerGuard());

  await app.listen(3000);
}
bootstrap();
