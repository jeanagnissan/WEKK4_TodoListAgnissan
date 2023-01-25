import { Todo } from './../../interfaces/todo';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

  @Output() todoList  : EventEmitter<Todo[]> = new EventEmitter();
  todos : Todo[] = [];
  titre ?: string ;
  description ?: string;


  getTitleValue(title : string){
    this.titre = title;
  }

  getDescriptionValue(description :string) {
    this.description = description;
  }

  getButtonState(buttonState : boolean) {
    this.todos.push({
      description : this.description as string,
      titre : this.titre as string
    });

    this.todoList.emit(this.todos);
  }
}
