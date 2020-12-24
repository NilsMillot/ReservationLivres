import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookSchema, Book } from './schemas/book.schema';
import { UserSchema, User } from './schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }], [{ name: User.name, schema: UserSchema }])
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
