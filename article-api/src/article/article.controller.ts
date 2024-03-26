import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from '../create-article-dto/create-article-dto';

@Controller('articles')
export class ArticleController {

  constructor(private service: ArticleService) {
  }

  @Get()
  getAll() {
    return this.service.getAll();
  }

  @Get(":id")
  getArticle(@Param("id") id: string) {
    return this.service.getArticle(id);
  }

  @Post()
  createArticle(@Body() articleDto: CreateArticleDto) {
    return this.service.createArticle(articleDto);
  }
}
