import { Controller, Get, Delete, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/create-book')
  createBook() {
    return "deuxieme return";
  }

  @Delete('/delete-book')
  deleteBook() {
    return "suppression d'un bouquin";
  }
  @Get('/read-book')
  readBook() {
    return "lecture d'un bouquin";
  }

  @Put('/reserve-book')
  reserveBook() {
    return "réservation d'un bouquin";
  }
  @Post('/report-rendering')
  reportRenderingBook() {
    return "signalement de rendu d'un livre";
  }

}
