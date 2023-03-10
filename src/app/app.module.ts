import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './pages/homepage/homepage.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { HeaderComponent } from './shared/header/header.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import {RouterModule} from "@angular/router";
import {MatInputModule} from "@angular/material/input";
import { LoginComponent } from './pages/login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { ProductModule } from './pages/products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    ContactsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'homepage', component: HomepageComponent},
      {path: 'contacts', component: ContactsComponent},
      {path: 'login', component: LoginComponent},
      {path: '', redirectTo: 'homepage', pathMatch: 'full'},
      {path: '**', redirectTo: 'homepage', pathMatch: 'full'}
    ]),
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
