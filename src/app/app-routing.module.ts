import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeekComponent } from './Components/week/week.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'calendar', component: WeekComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
