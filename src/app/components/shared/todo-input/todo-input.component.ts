import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {

  @Input() type ?: string ;
  @Output() titleEvent : EventEmitter<string>  =  new EventEmitter();
  @Output() descriptionEvent : EventEmitter<string>  =  new EventEmitter();


  constructor(){

  }

  sendEventTotheParent(event:any){
    const value = event.target.value;
    return this.type  == "title" ?
    this.titleEvent.emit(value)  :
    this.descriptionEvent.emit(value);
  }
}
