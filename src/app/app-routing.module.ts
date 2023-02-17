import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestGuard } from './guest.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full', canActivate:[GuestGuard] },
	{ path: 'home', component: HomeComponent, canActivate:[GuestGuard] },
	{ path: 'aboutus', component: HomeComponent, canActivate:[GuestGuard] },
	{ path: 'contact', component: HomeComponent, canActivate:[GuestGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
