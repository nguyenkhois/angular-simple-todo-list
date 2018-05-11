import { Injectable } from '@angular/core';
import { Task, Tasks } from './app.interfaces';

@Injectable({
  providedIn: 'root'
})

export class TodolistService {
    tasks: Tasks = [];
    constructor() { }

    addTask(newTask: Task) {
        this.tasks = [...this.tasks, newTask];
        return this;
    }

    completeTask(taskId: number) {
        const itemIndex = this.tasks.findIndex((item: Task) => item.id === taskId);
        this.tasks = this.tasks.map((item: Task, index: number) => index === itemIndex ? {...item, isDone: !item.isDone} : item);
        return this;
    }

    removeTask(taskId: number) {
        this.tasks = this.tasks.filter((item: Task) => item.id !== taskId);
        return this;
    }

    removeCompleted() {
        this.tasks = this.tasks.filter((item: Task) => !item.isDone);
        return this;
    }

    getAllTasks() {
        return this.tasks;
    }
}
