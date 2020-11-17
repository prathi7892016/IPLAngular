import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Leaderboard } from './Leaderboard';
import { TeamDetails } from './TeamDetails';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
url='http://localhost:8080/web'
  constructor(private http:HttpClient) { }
  getLeaderboard():Observable<any>{
    return(this.http.get(this.url.concat('/leaderboard')));
  }
  getBidderById(id:number):Observable<any>{
    let appendUrl=this.url.concat("/leaderboard/")+id+''
    return (this.http.get(appendUrl));
  }
  updateLeaderboard(leaderboard:Leaderboard):Observable<any>{
    return this.http.post(this.url.concat('/leaderboard'),leaderboard)
  }
  getPointstable():Observable<any>{
    let appendUrl=this.url.concat('/pointstable/')
    return (this.http.get(appendUrl));
  
  }
  getPointstableById(id:number):Observable<any>{
    let appendUrl=this.url.concat("/pointstable/")+id+''
    return (this.http.get(appendUrl));
  }
  updatePointstable(pointstable:TeamDetails):Observable<any>{
    let appendUrl=this.url.concat('/pointstable/')
    return this.http.post(this.url.concat('/pointstable'),pointstable)
  }
}