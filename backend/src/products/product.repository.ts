/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { productDto } from "./dto/product.dto";
import { Product } from "./product.interface";
// import { Product, productDocument } from "./product.schema";

@Injectable()
export class productRepository
{
    constructor(@InjectModel( "Product" ) private readonly productModel : Model<Product>){}
    // constructor(@InjectModel( product.name ) private readonly productModel : Model<productDocument>){}

    async findSingleProduct(productId : string ) : Promise<any>
    {
       return this.productModel.findOne({ productId });
    }

    async productList() : Promise<any>
    {
    return  this.productModel.find();
    }

    async findSingleProductAndUpdate(productId : string , productBody : any): Promise<any>
    {
    return this.productModel.findOneAndUpdate({ _id : productId } , productBody)
    }

    async addProduct(productBody : productDto): Promise<any>
    {
        const { title , description , price } = productBody
        // console.log()
        const product = new this.productModel({ title , description , price  })
        return product.save()
    }

    async findSingleProductAndDelete(productId): Promise<any>
    {
        return this.productModel.findOneAndDelete(productId)
    }
    
}

// let data = {
//     title: "abcd",
//     description:  "abcd",
//     price:    {
//       basePrice : 200,
//       sellPrice : 300
//     } ,
//     isActive: true,
//     country:   [{
//       name: "name",
//       price:  500
//     }]
//   }
