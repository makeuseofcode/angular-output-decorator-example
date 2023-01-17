import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';

  message: string = ""
  data: string[] = []
  buttonInChildComponentWasClicked(dataFromChild: string[]) {
    this.message = 'The button in the child component was clicked';
    this.data = dataFromChild;
  }
}
