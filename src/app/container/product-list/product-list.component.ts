import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [
    {
      id: 1,
      name: "Nike React Infinity Run Flyknit 3",
      description: "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 160,
      discountPrice: 140,
      is_in_inventory: false,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/45544e10-1e4c-437d-8340-dc4e9a9fbead/chaussure-de-running-sur-route-react-infinity-run-flyknit-3-pour-TXLsbD.png",
      slug: "nike-react-infinity-run-flyknit-3"
    },
    {
      id: 2,
      name: "Nike React Vision",
      description: "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 130,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/18f06b19-1f30-4579-8613-ab72339676a7/chaussure-react-vision-pour-gHxlbR.png",
      slug: "nike-react-vision"
    },
    {
      id: 3,
      name: "Nike React Kiger 9",
      description: "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 139,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c2ba1be3-ea13-47ce-96c9-9152903c082e/chaussure-de-trail-kiger-9-pour-G62sHD.png",
      slug: "nike-react-kiger-9"
    },
  ];
}
