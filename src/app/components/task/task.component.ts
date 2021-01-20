import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../task.service';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true })
  toastContainer: ToastContainerDirective;
  taskForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private taskService: TaskService,private toastrService: ToastrService ) { }

  ngOnInit(): void {
    this.toastrService.overlayContainer = this.toastContainer;
    this.taskForm = this.formBuilder.group({
      tasktitle: ['', [Validators.required]],
      taskdate: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      switchtask: ['', [Validators.required]],
    });

  }

  createTask(formValues){
    this.submitted = true;
    this.taskService.createTasks(formValues).then((result) => {
      this.toastrService.success('Task created');
    }).catch((error) => {
      this.toastrService.error(error.message);
    });
    
  }

  onReset() {
    this.submitted = false;
    this.taskForm.reset();
}

}
