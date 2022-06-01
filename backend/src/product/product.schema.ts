/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
  title: { type: String },
  description: { type: String },
  isActive: { type: Boolean, default: false },
  price: {
    basePrice: { type: Number, default: 0 },
  },
  contry: [
    {
      name: { type: String },
      price: { type: Number },
    },
  ],
});
