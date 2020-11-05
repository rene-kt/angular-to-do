import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public todos: any[] = [];

  public title: String = "To Do List";

  constructor(){
    this.todos.push('Estudar');
    this.todos.push('Lavar os pratos');
    this.todos.push('Lavar a casa');
  }
}
