import { HttpException } from '@nestjs/common';

export class ArticleNotFoundException extends HttpException {
  constructor() {
    super('Article not found', 404);
  }
}
