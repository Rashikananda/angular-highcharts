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
  types=[]
  range='Last 10 Mins';
  ranges=[{name:'Last 10 Mins',
  value:10},
  {name:'Last 5 Mins',
  value:5}]
  interval=""
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
