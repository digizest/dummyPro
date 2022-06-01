import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestServiceService } from '../services/rest-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  ngOnInit(): void {
  }
  public id : string = ""
  public  title: string = "";
  public  description: string = "";
  public  price: any ;
  public updateFlag : boolean = false
  public productToUpdate : any 
  public countryArray  : any;
  public isActive : boolean = false
  // public countryPrice : number  = 0
 
  constructor( private httpService  : RestServiceService , private route : Router ) { 
    //get data to update
    this.productToUpdate = this.route.getCurrentNavigation()?.extras.state;
    if(this.productToUpdate)
    {
      this.updateFlag = true
      console.log("productToUpdate",this.productToUpdate)
      this.id = this.productToUpdate['_id'];
      console.log("in updateProduct component",this.id)
      this.getProduct()
    }
    
  }
  
  getProduct()
  {
    this.httpService.getProductById(this.id).subscribe((data : any)=>{
     if(data)
     {
        console.log("product details" , data)
        //reset the form data
        this.title = data["title"];
        this.description = data["description"];
        this.price = data["price"].basePrice;
        this.countryArray = data["contry"];
        this.isActive = data["isActive"]
       

     }else{
       console.log("some error occurs" , data); 
     }

    })   

  }

  updateProduct()
  {
    let data = { id :  this.id ,title : this.title , description : this.description ,price : this.price }
    console.log("update data", data)
    this.httpService.updateProduct(data).subscribe((data)=>{
     if(data)
     {
        console.log("product updated" , data)
        //reset the form data
        this.title = "";
        this.description = "";
        this.price = 0;
        this.countryArray = [];
        this.price = { basePrice : 0 }
     }else{
       console.log("some error occurs" , data); 
     }

    })   

  }

}


