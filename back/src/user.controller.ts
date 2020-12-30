import { Controller, Get, Delete, Post, Put, Body, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { BookDTO, UserDTO } from './app.dto'

@Controller('users')
export class UserController {
  constructor(private readonly appService: AppService) {  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  createUser(@Body() dto: UserDTO) {
    return this.appService.createUser(dto);
  }

  @Delete(':userId')
  deleteUser(@Param('userId') userId: string) {
    return this.appService.deleteUser(userId);
  }

  @Get(':userId')
  readUser(@Param('userId') userId: string) {
    return this.appService.getUser(userId);
  }

  @Get('all')
  readUsers() {
    return this.appService.getUsers();
  }
}
