import {  IsEnum, IsOptional} from 'class-validator';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}
@Schema()
export class User {
 
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;
  
  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}

export const userSchema = SchemaFactory.createForClass(User);
