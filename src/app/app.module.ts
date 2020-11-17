import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { BidderloginComponent } from './bidderlogin/bidderlogin.component';
import { BiddersignupComponent } from './biddersignup/biddersignup.component';
import { EditleaderboardComponent } from './editleaderboard/editleaderboard.component';
import { DataService } from './data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeaderboardListComponent } from './leaderboard-list/leaderboard-list.component';

import { EditTeamdetailsComponent } from './edit-teamdetails/edit-teamdetails.component';
import { TeamdetailsListComponent } from './teamdetails-list/teamdetails-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
   BidderloginComponent,
   BiddersignupComponent,
   EditleaderboardComponent,
   LeaderboardListComponent,
   
   EditTeamdetailsComponent,
   TeamdetailsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule, ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
