import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BidderloginComponent } from './bidderlogin/bidderlogin.component';
import { BiddersignupComponent } from './biddersignup/biddersignup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditTeamdetailsComponent } from './edit-teamdetails/edit-teamdetails.component';
import { EditleaderboardComponent } from './editleaderboard/editleaderboard.component';

import { LeaderboardListComponent } from './leaderboard-list/leaderboard-list.component';

import { TeamdetailsListComponent } from './teamdetails-list/teamdetails-list.component';

const routes: Routes =  [{path:"",redirectTo:'/dashboard','pathMatch':'full'

},{path:"dashboard",component:DashboardComponent},{path:"bidderlogin",component:BidderloginComponent},

{path:"biddersignup",component:BiddersignupComponent},
{path:"edit/:id",component: EditleaderboardComponent},
{path:"leaderboard-list",component:LeaderboardListComponent},
{path:"edit-teamdetails/:id",component: EditTeamdetailsComponent},
{path:"teamdetails-list",component:TeamdetailsListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
