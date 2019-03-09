import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  
  displayedColumns: string[] = ['serial', 'name', 'consumers', 'messages'];
  dataSource =  [
    {serial: 1, name: 'Hydrogen', consumers: 23, messages: 1000},
    {serial: 2, name: 'Helium', consumers: 23, messages: 1000},
    {serial: 3, name: 'Lithium', consumers: 23, messages: 1000},
    {serial: 4, name: 'Beryllium', consumers: 23, messages: 1000},
    {serial: 5, name: 'Boron', consumers: 23, messages: 1000},
    {serial: 6, name: 'Carbon', consumers: 23, messages: 1000},
    {serial: 7, name: 'Nitrogen', consumers: 23, messages: 1000},
    {serial: 8, name: 'Oxygen', consumers: 23, messages: 1000},
    {serial: 9, name: 'Fluorine', consumers: 23, messages: 1000},
    {serial: 10, name: 'Neon', consumers: 23, messages: 1000}
  ];

  constructor() { }

  ngOnInit() {
  }

}
