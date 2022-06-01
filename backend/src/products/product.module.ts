/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { productController } from "./product.controller";
import { productRepository } from "./product.repository";
import { ProductSchema } from "./productSchema.schema"
import { ProductService } from "./product.service";
@Module({
    imports :[ MongooseModule.forFeature([{ name : "Product" ,schema : ProductSchema }]) ],
    controllers : [ productController ],
    providers : [ ProductService , productRepository ]

})
export class productModules{
    
}