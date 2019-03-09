import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {
  @Input('name') masterName: string;
  constructor() { }

  ngOnInit() {
  }

}
