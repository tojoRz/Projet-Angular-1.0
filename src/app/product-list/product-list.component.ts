import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  name = 'John Smith'
  product = {
    name: 'iPhone X',
    price: 798,
    color: 'Black',
    discount: 8.5,
    inStock: 2,
    pImage:'/assets/images/iphonex.png',
  }

  getDiscountedPrice(){
    return this.product.price - (this.product.price * this.product.discount / 100)
  }
}
