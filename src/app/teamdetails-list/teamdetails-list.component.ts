import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { TeamDetails } from '../TeamDetails';

@Component({
  selector: 'app-teamdetails-list',
  templateUrl: './teamdetails-list.component.html',
  styleUrls: ['./teamdetails-list.component.css']
})
export class TeamdetailsListComponent implements OnInit {
pointstable:TeamDetails[];
  constructor( private dataService:DataService ) {
    
  }

  ngOnInit(){this.dataService.getPointstable().subscribe(pointstable=>this.pointstable=pointstable)
  }

}
