import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Task } from './task';
import { TASKDATA } from './task.mock';

// import {AngularFireDatabase, AngularFireList} from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  getTasks(): Observable<Task[]> {
    return of(TASKDATA);

  }

  newTask(newtask) {
    return of("sanar");
    // this.FireDb.
  }

  constructor() { }
}
