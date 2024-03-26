import { Inject, Injectable } from '@nestjs/common';
import { Article } from './article';
import { CreateArticleDto } from '../create-article-dto/create-article-dto';
import { UserService } from '../user/user.service';
import { ArticleNotFoundException } from '../article-not-found.exception';

@Injectable()
export class ArticleService {

  articles: Article[];

  constructor(private userService: UserService) {
    this.articles = [];
  }

  getAll(): Article[] {
    return this.articles;
  }

  createArticle(articleDto: CreateArticleDto) {

    let article: Article = new Article();
    article.title = articleDto.title;
    article.content = articleDto.content;
    article.id = Math.floor(Math.random() * 1000);
    article.authorId = this.userService.getMe().id;
    this.articles.push(article);
  }

  getArticle(id: string) {
    let idAsNumber: number = parseInt(id);
    let article: Article = this.articles.find(article => article.id === idAsNumber);
    if (article) {
      return article;
    } else {
      throw new ArticleNotFoundException();
    }
  }
}
