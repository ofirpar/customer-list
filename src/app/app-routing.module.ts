import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {CustomerFormComponent} from './components/customer-form/customer-form.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'dashboard'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'customers', children: [
      {path: '', pathMatch: 'full', redirectTo: 'new'},
      {path: 'new', component: CustomerFormComponent},
      {path: ':id', component: CustomerFormComponent},
  ]},
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
