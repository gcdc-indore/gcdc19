import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

/* Serivce */
import { AuthGuard } from '../common/services/authguard';
import { CommanService } from '../common/services/services';
const routes: Routes = [
{
  path: 'dashboard',
  canActivate: [AuthGuard],
  data: {title: 'Get Started'},
  children: [{ path: '',component: HomeComponent},]},
  {path: '',component: HomeComponent, pathMatch: 'full'},
  //{path: 'register',loadChildren: './register/register.module#RegisterModule',data: {customLayout: true} ,pathMatch: 'full'},
  { path: "**",  redirectTo: "/", pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
