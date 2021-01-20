import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.taskForm = this.formBuilder.group({
      tasktitle: ['', [Validators.required]],
      taskdate: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      switchtask: ['', [Validators.required]],
    });

  }

  createTask(formValues){
    this.submitted = true;
    console.log(formValues);
    
  }

  onReset() {
    this.submitted = false;
    this.taskForm.reset();
}

}
