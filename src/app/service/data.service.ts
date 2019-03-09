import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import * as moment from "moment";
import { API_ENDPOINT } from "./Constants";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  get(url, params?: any[]) {
    let searchParams = new HttpParams();
    if (params) {
      params.forEach(d => {
        searchParams.append(d.key, d.val);
      });
    }
    console.log(searchParams);
    return this.http.get(API_ENDPOINT + url, { params: searchParams });
  }

  transformTimestamp(data: any[]) {
    return data.map(d => {
      let p = Number(moment(d.timeStamp, "DD-MM-YYYY HH:mm:ss").format("x"));
      return {
        x: p,
        y: d.arrivalRate
      };
    });
  }
}
