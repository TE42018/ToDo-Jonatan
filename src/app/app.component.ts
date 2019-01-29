import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My ToDo app';
  buttonPressed: boolean = false;
  todos = [
    {
      label: 'köp redbull ',
      priority: 5,
      deadline: 3,
      done: true,
    },
  ];

  togglePressed(todo){
    todo.done = !todo.done;
  }

  addTodo(newTodoLabel, priority, deadline) {
    const newTodo = {
      label: newTodoLabel,
      priority: priority,
      deadline: deadline,
      done: false
    };
    this.todos.push(newTodo);
  }
  deleteTodo(ToDo) {
    this.todos = this.todos.filter(t => t.label !== ToDo.label);
  }
}
