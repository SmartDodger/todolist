import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  public title: string;
  public description: string;
  public priority: string;
  public category: string;
  public date: string;
  public todoArray = [];
  public todoObj: any;
  public selectedAllTodo: boolean;

  constructor() { }

  addTodo() {
    this.todoObj = {
      title: this.title,
      description: this.description,
      priority: this.priority,
      category: this.category,
      date: this.date,
      completed: false
    };
    this.todoArray.push(this.todoObj);
    this.title = '';
    this.description = '';
    this.priority = '';
    this.category = '';
    this.date = '';
  }

  deleteTodo(index) {
    this.todoArray.splice(index, 1);
  }

  deleteSelected() {
    for (let i = (this.todoArray.length - 1); i > -1; i--) {
      if (this.todoArray[i].completed) {
        this.todoArray.splice(i, 1);
      }
    }
  }

  selected() {
    if (this.selectedAllTodo) {
      for (let i = (this.todoArray.length - 1); i > -1; i--) {
        this.todoArray[i].completed = true;
      }
    } else {
      for (let i = (this.todoArray.length - 1); i > -1; i--) {
        this.todoArray[i].completed = false;
      }
    }
  }

  ngOnInit() {
  }

}
