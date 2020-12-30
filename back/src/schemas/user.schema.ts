import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

enum ERole {
    Admin = "ADMIN",
    Reader = "READER",
}

@Schema()
export class User {

    @Prop({required: true})
    userName: string;

    @Prop()
    id: string;

    @Prop()
    isConnected: boolean;

    @Prop()
    role: ERole;
}

export const UserSchema = SchemaFactory.createForClass(User);
