import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Leaderboard } from '../Leaderboard';

@Component({
  selector: 'app-leaderboard-list',
  templateUrl: './leaderboard-list.component.html',
  styleUrls: ['./leaderboard-list.component.css']
})
export class LeaderboardListComponent implements OnInit {
leaderboard:Leaderboard[];
  constructor(private dataService:DataService) { }

  ngOnInit() {this.dataService.getLeaderboard().subscribe(leaderboard=>this.leaderboard=leaderboard)
  }

}
