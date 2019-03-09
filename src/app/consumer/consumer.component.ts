import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {
  @Input('name') masterName: string;
  @Output() changes:EventEmitter<any>= new EventEmitter();
  type="Arrival Time";
  types=[
    {
      name:'Arrival Time',
      value: 'AT'
    },
    {
      name:'Backlog',
      value: 'BL'
    }
  ]
  range='Last 10 Mins';
  ranges=[
    {
      name:'Last 10 Mins',
      value:10
    },
    {
      name:'Last 5 Mins',
      value:5
    }
  ];
  interval="Per 10 Secs";
  intervals=[
    {
      name: "Per 10 Secs",
      value: 10
    },
    {
      name: "Per 5 Secs",
      value: 5
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  change(p,change,q?:any){
    let r=q ? q: 10;
    if(p=="type"){
      this.type=change;
    }
    if(p=="range"){
      this.range=change;
    }
    if(p=="interval"){
      this.range=change;
    }
    
    this.changes.emit([this.type,r]);
  }

  

}
