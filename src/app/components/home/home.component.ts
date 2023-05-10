import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  todos: any = []
  title: string = ""
  desc: string = ""
  localitem: any = ""

  constructor() {
    this.localitem = localStorage.getItem("todos")
    if (this.localitem == null) {
      this.todos = []
    }
    else {
      this.todos = JSON.parse(this.localitem)
    }
  }

  addTodo() {
    this.todos.push(
      {
        title: this.title,
        desc: this.desc
      }
    )
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  deleteTodo(todo: any) {
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
}
