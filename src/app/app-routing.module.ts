import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DependancyComponent } from './dependancy/dependancy.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AngularformsComponent } from './dependancy/angularforms/angularforms.component';

const routes: Routes = [ 
  {
    path: '',
    // redirectTo: 'login',
    // pathMatch: 'full',
    component : LoginComponent
  },
  {
    path: 'home',
    // pathMatch: 'full',
    component : HomeComponent
  },
  {
    path: 'dependancy',
    // pathMatch: 'full',
    component : DependancyComponent
  },
  {
    path: 'dependancy/angularforms',
    // pathMatch: 'full',
    component : AngularformsComponent
  },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
