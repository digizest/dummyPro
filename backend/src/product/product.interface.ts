/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

interface Price {
  basePrice: number;
}

interface Country {
  name: string;
  price: number;
}
export interface Product extends Document {
  title: string;
  description: string;
  isActive: boolean;
  price: Price;
  contry: Country[];
}
