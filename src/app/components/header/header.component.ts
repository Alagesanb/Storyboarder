import { Component, OnInit,ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from "@angular/router";
import { AuthService } from  '../../auth/auth.service';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true })
  toastContainer: ToastContainerDirective;

  isLoggedIn$: Observable<boolean>;   
  constructor(public router: Router, public authService:  AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLogged; 
    
  }

  logout(){
    this.authService.logout()
  }
  
}
