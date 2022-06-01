/* eslint-disable prettier/prettier */
// /* eslint-disable @typescript-eslint/ban-types */
// export interface ProductModel {
//     title:String,
//     description:String ,
//     price:    { type: {
//       basePrice : { type : Number},
//       sellPrice : { type : Number}
//     } },
//     isActive:  Boolean ,
//     country:  { type: [{
//       name:   {type: String },
//       price:  {type: Number }
//     }]}
// }
import { Document } from 'mongoose';
export interface Product extends Document
{
    title:string,
    description:string,
    isActive:boolean,
    price:any,
    country:any
}