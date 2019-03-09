import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../service/data.service";

@Component({
  selector: "app-main-content",
  templateUrl: "./main-content.component.html",
  styleUrls: ["./main-content.component.css"]
})
export class MainContentComponent implements OnInit {
  db;
  constructor(private router: Router, private ds: DataService) {}

  ngOnInit() {
    this.ds.get("dashboard.json", null).subscribe(
      d => {
        this.db = d;
      },
      err => {
        console.log(err);
      }
    );
  }

  dispatch(routeName) {
    switch (routeName) {
      case "consumers": {
        this.router.navigate(["/", routeName]);
        break;
      }
      case "topics": {
        this.router.navigate(["/", routeName]);
        break;
      }
      default: {
        this.router.navigate(["/", routeName]);
      }
    }
  }
}
