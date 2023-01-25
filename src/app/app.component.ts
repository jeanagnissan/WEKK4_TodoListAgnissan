import { Component } from '@angular/core';
import { Todo } from './interfaces/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoListApp';

  todoList : Todo[] = [];

  getTodoList(todos : Todo[]) {
    this.todoList = todos;
    console.log(todos);
  }
}
