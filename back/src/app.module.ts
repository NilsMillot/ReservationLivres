import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookController } from './book.controller';
import { UserController } from './user.controller';
import { AppService } from './app.service';
import { BookSchema, Book } from './schemas/book.schema';
import { UserSchema, User } from './schemas/user.schema';
import { ReservationSchema, Reservation } from './schemas/reservation.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Reservation.name, schema: ReservationSchema }]),
  ],
  controllers: [BookController, UserController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
