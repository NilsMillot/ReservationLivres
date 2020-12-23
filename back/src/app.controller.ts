import { Controller, Get, Delete, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/books')
  createBook() {
    return "creation d'un livre";
  }

  @Delete('/books/{bookId}')
  deleteBook() {
    return "suppression d'un livre";
  }
  @Get('/books/{bookId}')
  readBook() {
    return "lecture d'un livre";
  }

  @Put('/books/{bookId}/assign')
  reserveBook() {
    return "réservation d'un livre";
  }
  @Put('/books/{bookId}/return')
  reportRenderingBook() {
    return "signalement de rendu d'un livre";
  }

}
