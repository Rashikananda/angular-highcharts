import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {
  @Output() templateIndexChange: EventEmitter<any> = new EventEmitter();
  templates = [
    {
      name: 'template1',
      path:'assets/templates/template1.JPG'
    },
    {
      name: 'template2',
      path:'assets/templates/template2.JPG'
    }


  ]
  constructor() {
    

   }

  ngOnInit() {
  }

}
