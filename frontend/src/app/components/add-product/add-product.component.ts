import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestServiceService } from 'src/app/services/rest-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
  public  title: string = "";
  public  description: string = "";
  public  price: any ;
  public updateFlag : boolean = false
  public productToUpdate : any 
  public countryName : string = "";
  public countryPrice : number  = 0;
  public isInvalid : boolean = false
  
  constructor( private httpService  : RestServiceService , private route : Router ) { 
    //get data to update
    this.productToUpdate = this.route.getCurrentNavigation()?.extras.state;
    if(this.productToUpdate)
    {
      this.updateFlag = true
      console.log("productToUpdate",this.productToUpdate)
      this.title = this.productToUpdate['title'];
      this.description = this.productToUpdate['description'];
      this.price = this.productToUpdate['price'];
    
    }
    
  }

  ngOnInit(): void {
  }
  
  addProduct()
  {
    let data = { title : this.title , description : this.description ,price : { basePrice : this.price }  , contry : [{name : this.countryName, price :this.countryPrice }] }

    console.log("product info before adding",data);
    
    this.httpService.addProduct(data).subscribe((data)=>{
     if(data)
     {
        console.log("product added" , data)
        //reset the form data
        this.title = "";
        this.description = "";
        this.price = 0;
     }else{
       console.log("some error occurs" , data); 
     }

    })   

  }

  updateProduct()
  {
    let data = { id :  this.productToUpdate['_id'] ,title : this.title , description : this.description ,price : this.price }
    this.httpService.updateProduct(data).subscribe((data)=>{
     if(data)
     {
        console.log("product added" , data)
        //reset the form data
        this.title = "";
        this.description = "";
        this.price = 0;
     }else{
       console.log("some error occurs" , data); 
     }

    })   

  }

  validateProduct( productFrom  : any)
  {
    console.log("form submit logs"  , productFrom);
    
  }
}
