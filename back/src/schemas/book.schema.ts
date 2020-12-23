import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  title: String,
  id: Number,
  reservedById: Number,
  isReserved: Boolean,
});