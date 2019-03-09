import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DemoMaterialModule} from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighchartsChartComponent } from 'highcharts-angular';
import { HighChartsComponent } from './highCharts/high-charts/high-charts.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainContentComponent } from './main-content/main-content.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { TopicsComponent } from './topics/topics.component';
import { ConsumersComponent } from './consumers/consumers.component';
@NgModule({
  declarations: [
    AppComponent,
    HighchartsChartComponent,
    HighChartsComponent,
    HeaderComponent,
    ContentComponent,
    MainContentComponent,
    ConsumerComponent,
    TopicsComponent,
    ConsumersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
