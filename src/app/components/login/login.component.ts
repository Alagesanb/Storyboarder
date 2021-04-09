import { Component, OnInit, HostListener,Input, Output,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ResizeService} from '../../resize.service';
import { AuthService } from  '../../auth/auth.service';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true })
  toastContainer: ToastContainerDirective;

  loginForm: FormGroup;
  private formSubmitAttempt: boolean;
  


  constructor( private formBuilder: FormBuilder,
              private resizeSvc: ResizeService,
              private  authService:  AuthService,
              private toastrService: ToastrService)
               { }

  ngOnInit(): void {
    this.toastrService.overlayContainer = this.toastContainer;
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }


  isFieldInvalid(field: string) {
      return (
      (!this.loginForm.get(field).valid && this.loginForm.get(field).touched) ||
      (this.loginForm.get(field).untouched && this.formSubmitAttempt)
      );
  }

  


  Login(formValues){
    console.log(formValues);
    if (this.loginForm.valid) {
    this.authService.LogIn(formValues.username, formValues.password)
    .then((result) => {
      this.toastrService.success('Login Success');
    }).catch((error) => {
      this.toastrService.error(error.message);
    })
  }
  this.formSubmitAttempt = true;
  }
  
}
