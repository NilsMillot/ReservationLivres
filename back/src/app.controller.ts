import { Controller, Get, Delete, Post, Put, Body, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { BookDTO } from './app.dto'

@Controller('books')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @UsePipes(new ValidationPipe({transform: true}))
  createBook(@Body() dto: BookDTO) {
    console.log(dto);
    return "creation du livre " + dto;
  }

  @Delete(':bookId')
  deleteBook(@Param('bookId') bookId: number) {
    console.log(bookId);
    return "suppression du livre" + bookId;
  }

  @Get(':bookId')
  readBook(@Param('bookId') bookId: number) {
    console.log(bookId);
    return "lecture du livre n°" + bookId;
  }

  @Put(':bookId/assign')
  reserveBook(@Param('bookId') bookId: number) {
    console.log(bookId);
    return "réservation du livre id n°" + bookId;
  }

  @Put(':bookId/return')
  reportRenderingBook(@Param('bookId') bookId: number) {
    console.log(bookId);
    return "signalement de rendu du livre avec l'id " + bookId;
  }

}
