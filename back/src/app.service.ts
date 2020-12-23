import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BookDTO, UserDTO, ReservationDTO, CreateUserDTO, CreateBookDTO } from './app.dto';



@Injectable()
export class AppService {

  constructor(@InjectModel('Book') private readonly postBook: Model<BookDTO>) { }

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
      const newBook = await new CreateBookDTO();
      return newBook.save();
  }

  async deleteBook(bookID: number): Promise<any> {
      const deletedBook = await this.postBook
          .findByIdAndRemove(bookID);
      return deletedBook;
  }

  async createUser(role: any) : Promise<CreateUserDTO> {
    const newUser = await new CreateUserDTO(role);
    return newUser;
  }

  // async createUser(role) {
  //   const user = {
  //     UserDTO.id = this.userIdCpt,
  //     UserDTO.role = role,
  //   }
  //   this.userIdCpt++;
  //   return user;
  // }

}