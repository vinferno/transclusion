import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { DashComponent } from './pages/dash/dash.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'dash', component: DashComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
