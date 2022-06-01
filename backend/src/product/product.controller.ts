/* eslint-disable prettier/prettier */

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductDto } from './product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {
    console.log('from product controller');
  }

  @Get()
  async getProductList(): Promise<any> {
    return this.productService.getProductList();
  }

  @Get(':productId')
  async getProductById(@Param('productId') productId: string): Promise<any> {
    return this.productService.getProductById(productId);
  }

  @Post()
  async addProduct(@Body() productBody: ProductDto): Promise<any> {
    return this.productService.addProduct(productBody);
  }

  @Patch(':productId')
  async updateProduct(
    @Param('productId') productId: string,
    @Body() productBody: ProductDto,
  ): Promise<any> {
    return this.productService.updateProduct(productId, productBody);
  }

  @Delete(':productId')
  async deleteProduct(@Param('productId') productId: string): Promise<any> {
    return this.productService.deleteProduct(productId);
  }
}
