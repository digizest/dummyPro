/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'
export type productDocument = Product & Document

@Schema()
export class Product
{
    //add title as props
    //validation , 
    @Prop()
    title : string;
    @Prop()
    description : string;
    @Prop()
    price : number;
}
//to-do
// const test = {
//     title : { type : String , required : true }
// }

export const userSchema = SchemaFactory.createForClass(Product)