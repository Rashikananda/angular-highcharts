import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import Data from "../../../assets/arrival-rate-raw.js";
import Data1 from "../../../assets/new-arraival-rate";
import * as moment from 'moment';
@Component({
  selector: 'app-high-charts',
  templateUrl: './high-charts.component.html',
  styleUrls: ['./high-charts.component.css']
})
export class HighChartsComponent implements OnInit,OnChanges {
    @Input ('data')HighchartsData;
  seriesData;
  topicsArray;
  consumerArray;
  constructor() { }

  ngOnInit(): void {
    this.topicsArray = Array.from(new Set(Data.map(rData => rData.topic)));
    this.topicsArray = Array.from(new Set(Data.map(rData => rData.consumer))).sort();
    // this.seriesData = this.getProcessedArrivalData1(Data);
    this.seriesData = this.getProcessedArrivalData2(Data1);
    this.chartOptions.series = this.seriesData;
  }
  ngOnChanges(){
      console.log(this.HighchartsData);
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
    let processedSeriesData = [];
    const self = this;
    processedSeriesData.push({name:"Topic1",data:[]})
    rawData.forEach(element => {
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
                //   console.log(series['data']);
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
  series: [{
      name: 'Random data',
      data: (function () {
          // generate an array of random data
          var data = [],
              time = (new Date()).getTime(),
              i;

          for (i = -19; i <= 0; i += 1) {
              data.push({
                  x: time + i * 1000,
                  y: Math.random()
              });
          }
          return data;
      }())
  }]
}


  updateFlag = false; // optional boolean
  oneToOneFlag = true; // optional boolean, defaults to false

}
