import { Injectable, ViewChild } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { AuthService } from "../../auth/auth.service";
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SecureInnerPages implements CanActivate {

  @ViewChild(ToastContainerDirective, { static: true })
  toastContainer: ToastContainerDirective;
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  constructor(public router: Router,private  authService:  AuthService, private toastrService: ToastrService) { }


  ngOnInit(): void {
    this.toastrService.overlayContainer = this.toastContainer;
    
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authService.isLoggedIn) {
      this.toastrService.info('You are not allowed to access this URL!');;
       this.router.navigate(['dashboard'])
    }
    return true;
  }
  
}
