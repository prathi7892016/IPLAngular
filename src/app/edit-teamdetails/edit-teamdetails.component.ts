import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { TeamDetails } from '../TeamDetails';

@Component({
  selector: 'app-edit-teamdetails',
  templateUrl: './edit-teamdetails.component.html',
  styleUrls: ['./edit-teamdetails.component.css']
})
export class EditTeamdetailsComponent implements OnInit {
  edited :boolean=false;
  editTeamdetails:TeamDetails = new TeamDetails ();
  teamId:number;
  constructor(private dataService:DataService,private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params=>this.teamId=params['id']);
   /* alert(this.teamId)*/
  this.dataService.getPointstableById(this.teamId).subscribe(pointstable=>this.editTeamdetails=pointstable);

  }
  editPoints(){
    this.dataService.updatePointstable(this.editTeamdetails).subscribe(pointstable=>this.editTeamdetails=pointstable);
    alert("points edited successfully")
    this.edited=true;
    
  }
}
