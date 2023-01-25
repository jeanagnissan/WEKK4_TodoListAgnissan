import { TodoItemComponent } from './../../components/shared/todo-item/todo-item.component';
import { TodoInputComponent } from './../../components/shared/todo-input/todo-input.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/components/shared/button/button.component';



@NgModule({
  declarations: [
    ButtonComponent,
    TodoInputComponent,
    TodoItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports  : [
    ButtonComponent,
    TodoInputComponent,
    TodoItemComponent
  ]
})
export class SharedModule { }
