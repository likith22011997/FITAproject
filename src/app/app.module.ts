import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StyleChangeDirective } from './direct/style-change.directive';
import { RenderStyleDirective } from './directives/render-style.directive';
import { DependancyComponent } from './dependancy/dependancy.component';``
import { HttpClientModule } from '@angular/common/http';
import { HttpCallComponent } from './http-call/http-call.component';
import { DiscountPipe } from './discount.pipe';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AngularformsComponent } from './dependancy/angularforms/angularforms.component';
// to add for using reactive forms
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StyleChangeDirective,
    RenderStyleDirective,
    DependancyComponent,
    HttpCallComponent,
    DiscountPipe,
    LoginComponent,
    HomeComponent,
    AngularformsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // to add for using reactive forms
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
