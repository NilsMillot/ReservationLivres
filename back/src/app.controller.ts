import { Controller, Get, Delete, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('books')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('')
  createBook() {
    return "creation d'un livre";
  }

  @Delete('{bookId}')
  deleteBook() {
    return "suppression d'un livre";
  }
  @Get('{bookId}')
  readBook() {
    return "lecture d'un livre";
  }

  @Put('{bookId}/assign')
  reserveBook() {
    return "réservation d'un livre";
  }
  @Put('{bookId}/return')
  reportRenderingBook() {
    return "signalement de rendu d'un livre";
  }

}
