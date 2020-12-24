import { Controller, Get, Delete, Post, Put, Body, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { BookDTO } from './app.dto'
import { UserHasTooMuchBooks } from './app.service';

@Controller('books')
export class AppController {
  constructor(private readonly appService: AppService) {  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  createBook(@Body() dto: BookDTO) {
    return this.appService.createBook(dto);
  }

  @Delete(':bookId')
  deleteBook(@Param('bookId') bookId: number) {
    console.log(bookId);
    return this.appService.deleteBook(bookId);
  }

  @Get(':bookId')
  readBook(@Param('bookId') bookId: number) {
    console.log(bookId);
    return "lecture du livre n°" + bookId;
  }

  @Put(':bookId/assign')
  reserveBook(@Param('bookId') bookId: number) {
    try {
      return this.appService.assign(bookId);
    } catch (e) {
      if (e instanceof UserHasTooMuchBooks) {
        return "L'utilisateur à plus de 3 livres. Il ne peut plus en réserver"
      }
    }
    return "réservation du livre id n°" + bookId;
  }

  @Put(':bookId/return')
  reportRenderingBook(@Param('bookId') bookId: number) {
    console.log(bookId);
    return "signalement de rendu du livre avec l'id " + bookId;
  }

}
