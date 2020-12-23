import * as mongoose from 'mongoose';

enum ERole {
    Admin = "ADMIN",
    Reader = "READER",
}

export const UserSchema = new mongoose.Schema({
  id: Number,
  isConnected: Boolean,
  role: ERole,
});