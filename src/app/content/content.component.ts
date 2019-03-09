import { Component, OnInit } from "@angular/core";
import { DataService } from "../service/data.service";
import { deepStrictEqual } from "assert";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"]
})
export class ContentComponent implements OnInit {
  constructor(private ds: DataService) {}

  ngOnInit() {
    this.ds.get("topic-ar.json", null).subscribe(
      d => {
        console.log(d);
      },
      err => {
        console.log(err);
      }
    );
  }
}
