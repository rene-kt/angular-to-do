import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public todos: Todo[] = []; 

  public title: String = "To Do List";

  constructor(){
    this.todos.push(new Todo('Estudar', false, 1));
    this.todos.push(new Todo('Trabalhar', false, 2));
    this.todos.push(new Todo('Lavar os pratos', false, 3));
  }
}
