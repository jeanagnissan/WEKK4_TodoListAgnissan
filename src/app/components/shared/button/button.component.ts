import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
 @Input() text !: string ;
 @Output() buttonState : EventEmitter<boolean> = new EventEmitter();


 createNewTodo(){
  this.buttonState.emit(true);
 }

}
