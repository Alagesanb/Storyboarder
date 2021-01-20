import { Component, OnInit, HostListener,Input, Output,ViewChild } from '@angular/core';
import { FormGroup,FormBuilder, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { ResizeService} from '../../resize.service';
import { AuthService } from  '../../auth/auth.service';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true })
  toastContainer: ToastContainerDirective;

  forgotForm: FormGroup;
  
  constructor( private formBuilder: FormBuilder,
    private  authService:  AuthService,
    public router: Router,
    private toastrService: ToastrService)
     { }

  ngOnInit(): void {
    this.toastrService.overlayContainer = this.toastContainer;
    this.forgotForm = this.formBuilder.group({
      username: [''],
    });
  }

  ForgotPassword(formValues){
    console.log(formValues);
    this.authService.ForgotPassword(formValues.username)
    .then((result) => {
      //this.toastrService.success('Verify Email');
      this.router.navigate(['home']);
    }).catch((error) => {
      this.toastrService.error(error.message);
    })
  }

}
