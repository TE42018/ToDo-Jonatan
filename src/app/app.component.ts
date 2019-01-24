import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My ToDo app';
  todos = [
    {
      label: 'köp bil ',
      priority: 3,
      done: false,
    },
    {
      label: 'köp redbull ',
      priority: 5,
      done: true,
    },
    {
      label: 'köp mat ',
      priority: 4,
      done: false,
    },
    {
      label: 'köp hus ',
      priority: 1,
      done: false,
    },
  ];

  addTodo(newTodoLabel, option) {
    const newTodo = {
      label: newTodoLabel,
      priority: option,
      done: false
    };
    this.todos.push(newTodo);
  }
  deleteTodo(ToDo) {
    this.todos = this.todos.filter(t => t.label !== ToDo.label);
  }
}
