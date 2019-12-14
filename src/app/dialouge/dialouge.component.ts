import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialouge',
  templateUrl: './dialouge.component.html',
  styleUrls: ['./dialouge.component.css']
})
export class DialougeComponent implements OnInit {
  

  constructor(public dialogRef: MatDialogRef<DialougeComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { 
      console.log(this.data);
    }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  toggelChange = (event,prop) => {
      console.log(event);
      const index = this.data.selectedProps.indexOf(prop.id);
      if (index > -1) {
        this.data.selectedProps.splice(index ,1)
      } else {
        this.data.selectedProps.push(prop.id)
      }
  }

}
