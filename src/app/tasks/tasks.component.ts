import { Component, OnInit,  HostBinding } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { TaskService } from '../task.service';

import { FormControl, FormGroup } from '@angular/forms';
import { observable, generate, of, pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'], 
  animations: [
    trigger("openCloseModal", [
      state("openModal", style({
        display: "block", 
        opacity: 1
      })), 
      state("closeModal", style({
        display: "none",
        opacity: 0
      })), 
      transition('openModal => closeModal', [
        animate('.4s ease-in')
      ]), 
      transition('closeModal => openModal', [
        animate('.4s ease-in')
      ])
    ]), 
    trigger("myInsertRemoveTrigger", [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class TasksComponent implements OnInit {

  constructor(private taskService : TaskService) { }

  tasks;
  showHideModal = false;
  // task form object creation

  taskForm = new FormGroup({
    title: new FormControl(''), 
    classAdded: new FormControl('')
  });

  getAllTasks () {
    this.taskService.getTasks().subscribe(resp => {
      this.tasks = resp;
    });
  }

  showTaskModal() {
    this.showHideModal = true;
  }

  generateId() {
      return "task_"+this.tasks.length;
  }

  taskCompleted(task) {
    task.isDone = true;
    var indexToRemove = this.tasks.indexOf(task);
    this.tasks.splice(indexToRemove, 1);
  }

  //save the task
  saveTask() {
    console.log(this.taskForm)
    var taskObj = this.taskForm.value;
    taskObj["isDone"] = false;
    taskObj["id"] = this.generateId();
    this.taskService.newTask(taskObj).subscribe(resp => {
      debugger;
      console.log(resp);
    })
    this.tasks.unshift(taskObj);
    this.showHideModal = false;
    this.taskForm.reset()
  }

  closeTaskModal() {
    this.showHideModal = false;
  }
  
 


  ngOnInit() {
    this.getAllTasks ()

    const nums = of(1, 2, 3, 4, 5);
 
// Create a function that accepts an Observable.
    const squareOddVals = pipe(
      filter((n: number) => n % 2 !== 0),
      map(n => n * n)
    );
    
    // Create an Observable that will run the filter and map functions
    const squareOdd = squareOddVals(nums);
    
    // Suscribe to run the combined functions
    squareOdd.subscribe(x => console.log(x));
    
  }

}
