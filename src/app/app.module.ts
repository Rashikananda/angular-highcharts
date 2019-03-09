import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { DemoMaterialModule } from "./material/material.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HighchartsChartComponent } from "highcharts-angular";
import { HighChartsComponent } from "./highCharts/high-charts/high-charts.component";
import { HeaderComponent } from "./header/header.component";
import { ContentComponent } from "./content/content.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainContentComponent } from "./main-content/main-content.component";
import { ConsumerComponent } from "./consumer/consumer.component";
import { TopicsComponent } from "./topics/topics.component";
import { ConsumersComponent } from "./consumers/consumers.component";
import { CommonComponent } from "./common/common.component";
import { HttpClientModule } from "@angular/common/http";
import { DataService } from "./service/data.service";
// import { CommonHighChartsComponent } from './highCharts/common-high-charts/common-high-charts';

@NgModule({
  declarations: [
    AppComponent,
    HighchartsChartComponent,
    HighChartsComponent,
    // CommonHighChartsComponent,
    HeaderComponent,
    ContentComponent,
    MainContentComponent,
    ConsumerComponent,
    TopicsComponent,
    ConsumersComponent,
    CommonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DemoMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
