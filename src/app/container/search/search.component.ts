import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>()

  onSearchTextChanged(){
  }

  updateSearchText(inputEL: HTMLInputElement){
    //this.searchText = event.target.value;
    //console.log(inputEL);
    this.searchText = inputEL.value;
    this.searchTextChanged.emit(this.searchText)
  }

}
