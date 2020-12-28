import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReservationDocument = Reservation & Document;

@Schema()
export class Reservation {

  @Prop({required: true})
  title: string;

  @Prop()
  id: number;

  @Prop()
  startReserve: Date;

  @Prop()
  endReserve: Date;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);
