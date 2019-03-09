import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.css']
})
export class ConsumersComponent implements OnInit {

  displayedColumns: string[] = ['serial', 'name', 'topics', 'messages'];
  dataSource =  [
    {serial: 1, name: 'Hydrogen', topics: 23, messages: 1000},
    {serial: 2, name: 'Helium', topics: 23, messages: 1000},
    {serial: 3, name: 'Lithium', topics: 23, messages: 1000},
    {serial: 4, name: 'Beryllium', topics: 23, messages: 1000},
    {serial: 5, name: 'Boron', topics: 23, messages: 1000},
    {serial: 6, name: 'Carbon', topics: 23, messages: 1000},
    {serial: 7, name: 'Nitrogen', topics: 23, messages: 1000},
    {serial: 8, name: 'Oxygen', topics: 23, messages: 1000},
    {serial: 9, name: 'Fluorine', topics: 23, messages: 1000},
    {serial: 10, name: 'Neon', topics: 23, messages: 1000}
  ];

  constructor(private router: Router) {}

  ngOnInit() {
  }
  dispatch(name){
    this.router.navigate(['/consumers', name]);
  }
}
