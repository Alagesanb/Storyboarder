import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Task } from '../../src/app/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private firestore: AngularFirestore) { }


  getTasks() {
    return this.firestore.collection('tasks').snapshotChanges();
  }


  createTasks(task: Task){
    return this.firestore.collection('tasks').add(task);
  }

  updateTask(task: Task){
    delete task.id;
    this.firestore.doc('task/' + task.id).update(task);
  }


  deleteTask(taskId: string){
    this.firestore.doc('tasks/' + taskId).delete();
  }

}
