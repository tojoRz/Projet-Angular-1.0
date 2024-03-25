import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  all: number = 0;
  inStock: number = 0;
  outOfstock: number = 0;
  

}
