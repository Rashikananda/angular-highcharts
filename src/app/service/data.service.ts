import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import * as moment from "moment";
import { API_ENDPOINT, template_suffix } from "./Constants";

@Injectable({
  providedIn: "root"
})
export class DataService {
  headers = new HttpHeaders({
    'Content-Type':  'application/json',

  });

  

  
  constructor(private http: HttpClient) {

    
  }

  getProperties() {
    return this.http.get('http://localhost:9000/properties')
  }

  get(url, qparams?: any[]) {
    console.log(qparams);
    let searchParams = new HttpParams();
    if (qparams) {
      qparams.forEach(d => {
        searchParams = searchParams.append(d.key, d.value);
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

  getTimeMinus(integer) {
    return moment()
      .subtract(integer, "minute")
      .format("YYYY-MM-DD HH:mm:ss");
  }
  getCurrentTime() {
    return moment().format("YYYY-MM-DD HH:mm:ss");
  }

  getTmplates() {
 
  }
  sendCamapignProperty(file) {
    var fd = new FormData();
        fd.append('file', file);
    return this.http.post( API_ENDPOINT+'/uploads',fd);
  }
  createCampaign(data) {
    console.log(data);
    const k = {	"title" : data.title,
    "template": template_suffix +  data.template + template_suffix,
    "createdDate": new Date().toString(),
    "company": "Infosys",
    "perference_target_ids":data.selectedProps.join(',')
	
}
   return this.http.post(API_ENDPOINT+ '/campaign',k);
  }
}
