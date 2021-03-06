import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() todo: Todo;
  constructor() { }

  ngOnInit() {
  }
// set dynamic classes
setClasses() {
  const classes = {
    todo: true,
    'is-complete': this.todo.completed
  };
  return classes;
}

onToggle(todo) {
  console.log('toggle');
}

onDelete(todo) {
  console.log('delete');
}

}
