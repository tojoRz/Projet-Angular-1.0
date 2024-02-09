import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // name = 'John Smith'
  addToCart:number = 0;
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

  onNameChange(event: any){
    // this.name = event.target.value
    //console.log(event.target.value)
  }

  decrementCartValue(){
    if(this.addToCart > 0){
      this.addToCart--;
    }
  }

  incrementCartValue(){
    if(this.addToCart < this.product.inStock){
      this.addToCart++;
    }
  }
}
