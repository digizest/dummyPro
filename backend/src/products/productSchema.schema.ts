/* eslint-disable prettier/prettier */

import { model, Schema } from "mongoose";

export const ProductSchema = new Schema({
  title: { type: String , required : true},
  description:     { type: String , default : "" },
  price:    { type: {
    basePrice : { type : Number},
    sellPrice : { type : Number}
  } },
  isActive:    { type: Boolean },
  country:  { type: [{
    name:   {type: String },
    price:  {type: Number }
  }]}
});

const Product = model('Product', ProductSchema);
module.exports = Product;