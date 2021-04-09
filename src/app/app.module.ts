import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './components/login/login.component';
import { SizedetectorComponent } from './sizedetector/sizedetector.component';
import { SharedModule } from "./shared/shared.module";
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { environment } from 'src/environments/environment';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {  AuthService } from "../app/auth/auth.service";
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { MaterialModule } from '../app/material/material.module';
import { TaskComponent } from './components/task/task.component';
import { ErrorComponent } from './components/error/error.component';
import { TaskListComponent } from './task-list/task-list.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
//import { MustMatch } from './_helpers/must-match/must-match.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    SizedetectorComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    DashboardComponent,
    TaskComponent,
    ErrorComponent,
    TaskListComponent,
    SidenavListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireMessagingModule,
    AngularFireDatabaseModule,
    AngularFireFunctionsModule,
    MatCarouselModule,
    ToastrModule.forRoot({ timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,}),
    ToastContainerModule,
    MaterialModule
  ],
  entryComponents: [ErrorComponent],
  providers: [AuthService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
