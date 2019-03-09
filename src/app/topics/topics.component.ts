import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../service/data.service";
@Component({
  selector: "app-topics",
  templateUrl: "./topics.component.html",
  styleUrls: ["./topics.component.css"]
})
export class TopicsComponent implements OnInit {
  displayedColumns: string[] = ["topicId", "topicName", "totalMessages"];
  dataSource;

  constructor(private router: Router, private ds: DataService) {}

  ngOnInit() {
    this.ds.get("topics.json", null).subscribe(
      (d: any[]) => {
        this.dataSource = d;
        console.log(d);
      },
      err => {
        console.log(err);
      }
    );
  }
  dispatch(name) {
    this.router.navigate(["/topics", name]);
  }
}
