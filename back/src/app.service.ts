import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BookDTO, UserDTO, ReservationDTO } from './app.dto';
import { Book, BookDocument } from './schemas/book.schema';
import { User, UserDocument } from './schemas/user.schema';


@Injectable()
export class AppService {

  constructor(
    @InjectModel(Book.name)
    @InjectModel(User.name)
    private readonly bookModel: Model<BookDocument>,
    private readonly userModel: Model<UserDocument>,
  ) { }

  async getBooks(): Promise<Book[]> {
      const books = await this.bookModel.find().exec();
      return books;
  }

  async getBook(bookId: number): Promise<Book> {
      const book = await this.bookModel
          .findById(bookId)
          .exec();
      return book;
  }

  async createBook(bookDTO: BookDTO): Promise<Book> {
      const createdBook = await new this.bookModel(bookDTO);
      return createdBook.save();
  }

  async deleteBook(bookID: number): Promise<void> {
      const deletedBook = await this.bookModel
          .findByIdAndRemove(bookID);
  }

  async assign(bookId: number, userId: number) {
    const books = await this.bookModel
      .find({ reservedById: userId })
      .exec();

    if (books.length > 2) {
      throw new UserHasTooMuchBooks();
    }
  }

  async report(bookId: number, userId: number) {
    const books = await this.bookModel
      .find({ reservedById: userId }, { id: bookId })
      .update({ isReserved: false })
      .exec();

    if (books.length == 0) {
      throw new UserHasNeverReseveBooks();
    }
  }

  // async createUser(userDTO: UserDTO): Promise<User> {
  //     const createdUser = await new this.userModel(userDTO);
  //     return createdUser.save();
  // }
}
export class UserHasTooMuchBooks extends Error {}
export class UserHasNeverReseveBooks extends Error {}
