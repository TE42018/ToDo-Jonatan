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
      done: true,
    },
  ];

  togglePressed(todo){
    todo.done = !todo.done;
  }

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
