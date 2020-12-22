import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/create-book')
  createBook() {
    return "deuxieme return";
  }

  @Get('/delete-book')
  deleteBook() {
    return "suppression d'un bouquin";
  }
  @Get('/read-book')
  readBook() {
    return "lecture d'un bouquin";
  }

  @Get('/reserve-book')
  reserveBook() {
    return "réservation d'un bouquin";
  }
  @Get('/report-rendering')
  reportRenderingBook() {
    return "signalement de rendu d'un livre";
  }

}
