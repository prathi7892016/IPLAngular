import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BidderloginComponent } from './bidderlogin/bidderlogin.component';
import { BiddersignupComponent } from './biddersignup/biddersignup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes =  [{path:"",redirectTo:'/dashboard','pathMatch':'full'

},{path:"dashboard",component:DashboardComponent},{path:"bidderlogin",component:BidderloginComponent},
{path:"biddersignup",component:BiddersignupComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
