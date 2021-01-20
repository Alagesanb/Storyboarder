import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../app/task.service';
import { Task } from '../../app/models/task.model';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  
  tasks: Task[];
  
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {

    this.taskService.getTasks().subscribe(data => {
      this.tasks = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data
        } as Task;
      })
    });

  }


  create(task: Task){
    this.taskService.createTasks(task);
  }

  update(task: Task) {
    this.taskService.updateTask(task);
  }

  delete(id: string) {
    this.taskService.deleteTask(id);
  }

}
