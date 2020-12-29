import { Controller, Get, Delete, Post, Put, Body, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { BookDTO, UserDTO } from './app.dto'
import { UserHasTooMuchBooks, UserHasNeverReseveBooks } from './app.service';

@Controller('books')
export class BookController {
  constructor(private readonly appService: AppService) {  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  createBook(@Body() dto: BookDTO) {
    return this.appService.createBook(dto);
  }

  @Delete(':bookId')
  deleteBook(@Param('bookId') bookId: number) {
    return this.appService.deleteBook(bookId);
  }

  @Get(':bookId')
  readBook(@Param('bookId') bookId: number) {
    return this.appService.getBook(bookId);
  }

  @Put(':bookId/:userId/assign')
  reserveBook(@Param('bookId') bookId: number, @Param('userId') userId: number) {
    try {
      return this.appService.assign(bookId, userId);
    } catch (e) {
      if (e instanceof UserHasTooMuchBooks) {
        return "L'utilisateur à plus de 3 livres. Il ne peut plus en réserver"
      }
    }
  }

  @Put(':bookId/return')
  reportRenderingBook(@Param('bookId') bookId: number, @Param() userId: number) {
    try {
      return this.appService.report(bookId, userId);
    } catch (e) {
      if (e instanceof UserHasNeverReseveBooks) {
        return "L'utilisateur ne peut pas rendre ce livre car il ne l'a jamais emprunté"
      }
    }
  }
}
