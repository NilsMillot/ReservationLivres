import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BookDTO, UserDTO, ReservationDTO } from './app.dto';


@Injectable()
export class AppService {
  //regarder la doc InjectModel https://docs.nestjs.com/recipes/mongodb
  //Mon constructor n'est pas bon
  constructor(@InjectModel('BOOK_MODEL') private readonly bookModel: Model<any>) { } 

  async getBooks(): Promise<BookDTO[]> {
      const books = await this.bookModel.find().exec();
      return books;
  }

  async getBook(bookID: number): Promise<BookDTO> {
      const book = await this.bookModel
          .findById(bookID)
          .exec();
      return book;
  }

  async createBook(createBookDTO: BookDTO): Promise<BookDTO> {
      const createdBook = await new this.bookModel(BookDTO);
      return createdBook;
      // return createdBook.save();
  }

  async deleteBook(bookID: number): Promise<any> {
      const deletedBook = await this.bookModel
          .findByIdAndRemove(bookID);
      return deletedBook;
  }

  // async createUser(role: any) : Promise<UserDTO> {
  //   const createdUser = await new this.userModel(UserDTO);
  //   return createdUser;
    // return createdUser.save();
  //}

}