import { DataService } from './../service/data.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {
  @Input('name') masterName: string;
  @Output() changes:EventEmitter<any>= new EventEmitter();

  constructor(private ds: DataService) {

  }

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
  range='10 Samples';
  ranges=[
    {
      name: '10 Samples',
      value: 10
    },
    {
      name: '20 Samples',
      value: 20
    }
  ];
  interval="Per Hour";
  intervals=[
    {
      name: "Per Hour",
      value: "hour"
    },
    {
      name: "Per Minute",
      value: "min"
    }
  ];

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
      this.interval=change;
    }

    const typeIndex = this.types.findIndex(tItem => tItem.name === this.type);
    const rangeIndex = this.ranges.findIndex(rItem => rItem.name === this.range);
    const intervalIndex = this.intervals.findIndex(iItem => iItem.name === this.interval);
    
    this.changes.emit([
      {
        key: "startTimeStamp",
        value: this.ds.getCurrentTime()
      },
      {
        key: "startTimeStamp",
        value: this.ds.getTimeMinus(1)
      },
      {
        key: "type",
        value: this.types[typeIndex].value 
      },
      {
        key: "sampleCount",
        value: this.ranges[rangeIndex].value
      },
      {
        key: "arrivalRateUnit",
        value: this.intervals[intervalIndex].value
      }
    ]);
  }
}
