import { TodoFormComponent } from './../../components/todo-form/todo-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared-module/shared-module.module';
import { TodoListComponent } from 'src/app/components/todo-list/todo-list.component';



@NgModule({
  declarations: [
    TodoFormComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports : [TodoFormComponent,TodoListComponent]
})
export class TodoModule { }
