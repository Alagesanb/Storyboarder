import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../../auth/auth.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  User: any = ['Super Admin', 'Author', 'Reader']; 

  registerForm: FormGroup;

  constructor( private formBuilder: FormBuilder, private  authService:  AuthService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username:['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  Registration(formValues){

    console.log(formValues);
    this.authService.Registration(formValues.email, formValues.password);

  }

}
