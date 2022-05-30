import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestServiceService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get('http://localhost:3000/product');
  }

  addProduct(productInfo: any) {
    let { title, description, price } = productInfo;
    return this.http.post('http://localhost:3000/product', {
      title,
      description,
      price,
    });
  }
  updateProduct(productInfo: any) {
    let { id, title, description, price } = productInfo;
    return this.http.patch(`http://localhost:3000/product/${id}`, {
      title,
      description,
      price,
    });
  }
  deleteProduct(productId: string) {
    return this.http.delete(`http://localhost:3000/product/${productId}`);
  }
}
