import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import Data from "../../assets/arrival-rate-raw.js";
import Data1 from "../../assets/new-arraival-rate";
import * as moment from 'moment';
import { DataService } from '../service/data.service.js';
import { isUndefined } from 'util';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements  OnInit,OnChanges {
  @Input ('name') name;
  
seriesData;
topicsArray;
consumerArray;
// name="d dsvbdshbvhjvhdvs";
constructor(private ds: DataService,  private route: ActivatedRoute,
    private router: Router) {}

name$;
masterName;
ngOnInit(): void {
  console.log(this.name)
  this.topicsArray = Array.from(new Set(Data.map(rData => rData.topic)));
  this.topicsArray = Array.from(new Set(Data.map(rData => rData.consumer))).sort();
  // this.seriesData = this.getProcessedArrivalData1(Data);
  let data1;
  this.name$ = this.route.paramMap.pipe(
    switchMap((params: ParamMap) =>{
       let x = params.get('id');
       console.log(x);
       return this.ds.get(x+".json",null);
    })).subscribe(data=>{
    
        this.seriesData = this.getProcessedArrivalData2(data)
        this.chartOptions.series = this.seriesData;
        this.updateFlag=true;
    console.log(this.seriesData,this.chartOptions.series)});
 
    
  
//   console.log(data1,this.seriesData);

}
ngOnChanges(){
    // console.log(this.HighchartsData);
}
// getProcessedArrivalData1(rawData) {
//   let processedSeriesData = [];
//   const self = this;
//   rawData.forEach(element => {
//     let index = processedSeriesData.findIndex(psData => psData.name === element.topic);
//     if (index === -1) {
//       processedSeriesData.push({ name: element.topic, data: [] });
//       index = processedSeriesData.length - 1;
//     }
//     processedSeriesData[index]["data"].push({
//       x: new Date(element.timestamp).getTime(),
//       y: this.topicsArray.indexOf(element.consumer)
//     })
//   });
//   return processedSeriesData;
// }
getProcessedArrivalData2(rawData) {
    console.log(rawData);
    if (isUndefined(rawData)){
        return [];
    }
  let processedSeriesData = [];
  const self = this;
  let data3=rawData['samples']
  processedSeriesData.push({name:rawData['topic'],data:[]})
  data3.forEach(element => {
    let p= Number(moment(element.timeStamp, "DD-MM-YYYY HH:mm:ss").format("x"))
    processedSeriesData[0]["data"].push({
      x: p,
      y: element.arrivalRate
    })
  });
  return processedSeriesData;
}
title = 'demo1';
Highcharts = Highcharts; // required
chartConstructor = 'chart'; // optional string, defaults to 'chart'
chartOptions = {
  chart: {
    type: 'spline',
  //   animation: Highcharts.svg, // don't animate in old IE
    marginRight: 10,
    events: {
        load: function () {

            // set up the updating of the chart each second
            var series = this.series[0];
            
            setInterval(function () {
                if (!series){
                return 
                }
                var x = series['data'][series['data'].length-1]['x']+50000, // current time
                    y = Math.random() * Math.floor(3);
                  //   console.log(x,y)
                series.addPoint([x, y], true, true);
            }, 1000);
        }
    }
},
  time: {
    useUTC: false
},

title: {
    text: 'Live random data'
},
xAxis: {
    type: 'datetime',
    tickPixelInterval: 150
},
yAxis: {
    title: {
        text: 'Value'
    },
    plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
    }]
},
tooltip: {
    headerFormat: '<b>{series.name}</b><br/>',
    pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
},
legend: {
    enabled: false
},
exporting: {
    enabled: false
},
series: [
//     {
//     name: 'Random data',
//     data: (function () {
//         // generate an array of random data
//         var data = [],
//             time = (new Date()).getTime(),
//             i;

//         for (i = -19; i <= 0; i += 1) {
//             data.push({
//                 x: time + i * 1000,
//                 y: Math.random()
//             });
//         }
//         return data;
//     }())
// }
]
}
change(){
    
}


updateFlag = false; // optional boolean
oneToOneFlag = true; // optional boolean, defaults to false

}
