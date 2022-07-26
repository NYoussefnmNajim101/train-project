import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task:Task|any;
  @Output() onDeleteTask:EventEmitter<Task>=new EventEmitter();
  red:string='#f00'; 
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  } 
  onDelete(task:any){ 
    this.onDeleteTask.emit(task);
  }

}
