import { Time } from '@angular/common';
import { BiddingDetails } from './BidddingDetails';

export class MatchDetails{
     matchId:number;
     teamOne:string;
	 teamTwo:string;
     date:Date;
	 startTime:Time;
	 endTime:Time;
	 stadium:string;
	 winner:string;
	 status:string;
	 delay:string;
	 bid:BiddingDetails;
	 biddingMatchId:BiddingDetails[];
	}
