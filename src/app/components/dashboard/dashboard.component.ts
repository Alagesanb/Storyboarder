import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../../auth/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userdata: any; 
  constructor(public router: Router,public  authService:  AuthService) { }
  
  ngOnInit(): void {
    this.userdata = this.authService.SetUserData;

  }




}
