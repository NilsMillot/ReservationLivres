import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BookDTO, UserDTO, ReservationDTO } from './app.dto';
import { Book, BookDocument } from './schemas/book.schema';
import { User, UserDocument } from './schemas/user.schema';
import { Reservation, ReservationDocument } from './schemas/reservation.schema';


@Injectable()
export class AppService {

  constructor(
    @InjectModel(Book.name)
    private readonly bookModel: Model<BookDocument>,
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    @InjectModel(Reservation.name)
    private readonly reservationModel: Model<ReservationDocument>,
  ) { }

  //----------------------------------  BOOKS  ----------------------------------
  async getBooks(): Promise<Book[]> {
      const books = await this.bookModel
            .find()
            .exec();
      return books;
  }

  async getBook(bookId: string): Promise<Book> {
      const book = await this.bookModel
          .findById(bookId)
          .exec();
      return book;
  }

  async createBook(bookDTO: BookDTO): Promise<Book> {
      const createdBook = await new this.bookModel(bookDTO);
      return createdBook.save();
  }

  async deleteBook(bookID: string): Promise<void> {
      const deletedBook = await this.bookModel
          .findByIdAndRemove(bookID,
          {useFindAndModify: false});
  }

  async assign(bookId: string, userId: string) {
    const books = await this.bookModel
      .findById(bookId)
      .updateOne({id: bookId, reservedById: null}, {reservedById: userId})
      .exec();

    if (books.length > 2) {
      throw new UserHasTooMuchBooks();
    }
  }

  async report(bookId: string, userId: string) {
    const books = await this.bookModel
      .findById(bookId)
      .updateOne({id: bookId, reservedById: userId}, {reservedById: null})
      .exec();

    if (books.length == 0) {
      throw new UserHasNeverReseveBooks();
    }
  }

  //----------------------------------  USERS  ----------------------------------
  async getUsers(): Promise<User[]> {
      const users = await this.userModel
            .find()
            .exec();
      return users;
  }

  async getUser(userId: string): Promise<User> {
      const user = await this.userModel
          .findById(userId)
          .exec();
      return user;
  }

  async createUser(userDTO: UserDTO): Promise<User> {
      const createdUser = await new this.userModel(userDTO);
      return createdUser.save();
  }

  async deleteUser(userID: string): Promise<void> {
      const deletedUser = await this.userModel
            .findByIdAndRemove(userID,
            {useFindAndModify: false});
  }

  //----------------------------------  RESERVATIONS  ----------------------------------
  async createReservation(reservationDTO: ReservationDTO): Promise<Reservation> {
      const createdReservation = await new this.reservationModel(reservationDTO);
      return createdReservation.save();
  }
}
export class UserHasTooMuchBooks extends Error {}
export class UserHasNeverReseveBooks extends Error {}
