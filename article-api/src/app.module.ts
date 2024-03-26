import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ArticleService } from './article/article.service';
import { ArticleController } from './article/article.controller';
import { UserService } from './user/user.service';
import { LogMiddleware } from './log/log.middleware';

@Module({
  imports: [UserModule],
  controllers: [AppController, ArticleController],
  providers: [AppService, ArticleService, UserService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LogMiddleware)
      .forRoutes('articles')
  }
}
