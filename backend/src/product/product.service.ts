/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDto } from './product.dto';
import { Product } from './product.interface';

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private productModel: Model<Product>) {}

  async addProduct(productBody: ProductDto): Promise<any> {
    const product = new this.productModel(productBody);

    return await product.save();
  }

  async getProductList(): Promise<any> {
    return this.productModel.find();
  }

  async getProductById(productId: string): Promise<any> {
    const found = await this.productModel.findById(productId);
    //    if(found)
    //    {
    //     throw new BadRequestException();
    //    }
    return found;
  }

  async updateProduct(
    productId: string,
    productBody: ProductDto,
  ): Promise<any> {
    return this.productModel.findOneAndUpdate({ _id: productId }, productBody, {
      upsert: true,
    });
  }

  async deleteProduct(productId: string): Promise<any> {
    return this.productModel.findOneAndDelete({ _id: productId });
  }
}
