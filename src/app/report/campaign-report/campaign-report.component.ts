import { Component, OnInit, OnDestroy } from '@angular/core';
import { timer, Observable, Subject } from 'rxjs';
import { DataService } from '../../service/data.service';
import { switchMap, takeUntil, catchError } from 'rxjs/operators';
@Component({
  selector: 'app-campaign-report',
  templateUrl: './campaign-report.component.html',
  styleUrls: ['./campaign-report.component.css']
})
export class CampaignReportComponent implements OnInit,OnDestroy {
	private datas =[];
	 private killTrigger = new Subject();
	 private fetchData$ = this.myservice.getDashboardData().pipe(
		// This kills the request if the user closes the component 
		takeUntil(this.killTrigger));
	 private refreshInterval$ = timer(0, 1000)
.pipe(
  // This kills the request if the user closes the component 
  takeUntil(this.killTrigger),
  // switchMap cancels the last request, if no response have been received since last tick
  switchMap(() => this.fetchData$),
  // catchError handles http throws 
//   catchError(error => of('Error'))
);
  constructor(private myservice: DataService) { 
  }

  ngOnInit() {

	this.fetchData$.subscribe(console.log);
	this.refreshInterval$.subscribe(console.log);
  }

  title = 'app';

	columnDefs = [
		{headerName: 'Make', field: 'make' },
		{headerName: 'Model', field: 'model' },
		{headerName: 'Price', field: 'price'}
	];

	rowData = [
		{ make: 'Toyota', model: 'Celica', price: 35000 },
		{ make: 'Ford', model: 'Mondeo', price: 32000 },
		{ make: 'Porsche', model: 'Boxter', price: 72000 }
	];

	ngOnDestroy() {
		
		this.killTrigger.next();
	}

}
