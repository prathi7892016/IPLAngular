import { Component, OnInit } from '@angular/core';
import { Leaderboard } from '../Leaderboard';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-editleaderboard',
  templateUrl: './editleaderboard.component.html',
  styleUrls: ['./editleaderboard.component.css']
})
export class EditleaderboardComponent implements OnInit {
edited :boolean=false;
editLeaderboard:Leaderboard = new Leaderboard();
bidderId:number;

constructor(private dataService:DataService,private route:ActivatedRoute) { }

  ngOnInit(){
    this.route.params.subscribe(params=>this.bidderId=params['id']);
    this.dataService.getBidderById(this.bidderId).subscribe(leaderboard=>this.editLeaderboard=leaderboard);

   
    
  }
editBidderPoints(){
  this.dataService.updateLeaderboard(this.editLeaderboard).subscribe(leaderboard=>this.editLeaderboard=leaderboard)
  alert("bidderpoints edited successfully")
  this.edited=true;
  
}
editBidsWon(){
  this.dataService.updateLeaderboard(this.editLeaderboard).subscribe(leaderboard=>this.editLeaderboard=leaderboard)
  alert("bidswon edited successfully")
  this.edited=true;
  
}
}

