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
  private formSubmitAttempt: boolean;

  constructor( private formBuilder: FormBuilder, private  authService:  AuthService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username:['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  isFieldInvalid(field: string) {
    return (
    (!this.registerForm.get(field).valid && this.registerForm.get(field).touched) ||
    (this.registerForm.get(field).untouched && this.formSubmitAttempt)
    );
  }

  Registration(formValues){

    console.log(formValues);
    if (this.registerForm.valid) {
    this.authService.Registration(formValues.email, formValues.password);
    }
    this.formSubmitAttempt = true;
  }

}
