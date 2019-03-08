import { Component,OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import  Data  from "../assets/arrival-rate-raw.json";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(){
   
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  
    // console.log(this.data,Data);

    this.seriesData=this.getProcessedArrivalData(Data);
    this.chartOptions.series=this.seriesData;
    
  }
  getProcessedArrivalData(rawData){
    let processedSeriesData = [];
    // rawData.forEach()
    const self=this;
    const topicArray = 
    rawData.forEach((data)=>{
      let index = processedSeriesData.findIndex(sData => sData.name === data.topic);
      if(index === -1) {
        processedSeriesData.push({name: data.topic,data:[]});
        index=processedSeriesData.length-1;
      }
      console.log(processedSeriesData);
      console.log(index);
      processedSeriesData[index]["data"].push(new Date(data.timestamp).getTime())
    })
  // console.log(processedSeriesData);
  return processedSeriesData;
  }
  title = 'demo1';
  Highcharts = Highcharts; // required
  chartConstructor = 'chart'; // optional string, defaults to 'chart'
  seriesData;
  chartOptions = { title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
    },

    // subtitle: {
    //     text: 'Source: thesolarfoundation.com'
    // },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

}// required
  // chartCallback = function (chart) { ... } // optional function, defaults to null

  
  updateFlag = false; // optional boolean
  oneToOneFlag = true; // optional boolean, defaults to false

}
