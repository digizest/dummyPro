/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsBoolean, IsNumber } from 'class-validator';

export class Country {
  @IsString()
  name: string;
  @IsNumber()
  price: number;
}

export class ProductDto {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsString()
  description: string;
  @IsBoolean()
  isActive: boolean;
  // @IsNotEmpty()
  price: {
    basePrice: number;
  };
  contry: Country[];
}
