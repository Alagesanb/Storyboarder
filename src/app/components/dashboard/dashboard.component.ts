import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../../auth/auth.service';
import { Router } from "@angular/router";
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userdata: any; 
  constructor(public router: Router,public  authService:  AuthService,public taskService: TaskService) { }
  
  ngOnInit(): void {
    let data = this.taskService.getTasks();

  }




}
