import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { RouterModule} from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { SignInComponent } from './sign-in/sign-in.component';

import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent,
    NavigationComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    DataTablesModule,
    RouterModule.forRoot([
      {
        path: 'sign_in',
        component: SignInComponent
     },
      {
         path: 'home',
         component: HomeComponent
      },
     {
        path: 'account',
        component: AccountComponent
     }
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
