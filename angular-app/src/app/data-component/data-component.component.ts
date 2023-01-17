import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-component',
  templateUrl: './data-component.component.html',
  styleUrls: ['./data-component.component.css']
})
export class DataComponentComponent implements OnInit {

  @Output() buttonWasClicked = new EventEmitter<string[]>();
  listOfPeople: string[] = ['Joey', 'John', 'James'];

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.buttonWasClicked.emit(this.listOfPeople);
  }

}
