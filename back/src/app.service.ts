import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs';
import { BookDTO, UserDTO, ReservationDTO } from './app.dto';
import { CreateBookDTO } from './dto/create-book.dto';


@Injectable()
export class AppService {

   constructor(@InjectModel('Book') private readonly postBook: Model<Book>) { }

    getHello(): string {
      return 'Hello World!';
    }

   async getBooks(): Promise<BookDTO[]> {
       const books = await this.postBook.find().exec();
       return books;
   }

   async getBook(bookID: number): Promise<BookDTO> {
       const book = await this.postBook
           .findById(bookID)
           .exec();
       return book;
   }

   async createBook(createBookDTO: BookDTO): Promise<BookDTO> {
       const newBook = await this.postBook(BookDTO);
       return newBook.save();
   }

   async deleteBook(bookID: number): Promise<any> {
      const deletedBook = await this.postBook
          .findByIdAndRemove(bookID);
      return deletedBook;
    }
}