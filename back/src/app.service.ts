import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs';
import { Book } from './book.module.ts';
import { CreatePostDTO } from './dto/create-book.dto';


@Injectable()
export class AppService {

   constructor(@InjectModel('Book') private readonly postBook: Model<Book>) { }

    getHello(): string {
      return 'Hello World!';
    }

   async getBooks(): Promise<Book[]> {
       const books = await this.postBook.find().exec();
       return books;
   }

   async getBook(bookID: number): Promise<Book> {
       const book = await this.postBook
           .findById(bookID)
           .exec();
       return book;
   }

   async createBook(createBookDTO: CreateBookDTO): Promise<Book> {
       const newBook = await this.postBook(createBookDTO);
       return newBook.save();
   }

   async deleteBook(bookID: number): Promise<any> {
      const deletedBook = await this.postBook
          .findByIdAndRemove(bookID);
      return deletedBook;
    }
}