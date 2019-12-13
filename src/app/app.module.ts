import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { DemoMaterialModule } from "./material/material.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { QuillModule } from 'ngx-quill'
import { HttpClientModule } from "@angular/common/http";
import { DataService } from "./service/data.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddMailComponent } from './add-mail/add-mail.component';
import { TemplatesComponent } from './templates/templates.component';
import { QuillInitializeService } from './service/quill-initialize-service.service';
import { FormsModule } from '@angular/forms';
import { DialougeComponent } from './dialouge/dialouge.component';
// import { CommonHighChartsComponent } from './highCharts/common-high-charts/common-high-charts';

@NgModule({
  declarations: [
    AppComponent,
    // CommonHighChartsComponent,
    HeaderComponent,
    DashboardComponent,
    AddMailComponent,
    TemplatesComponent,
    DialougeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    QuillModule.forRoot(),
    FormsModule
  ],
  providers: [DataService,QuillInitializeService],
  bootstrap: [AppComponent],
  entryComponents: [DialougeComponent]
})
export class AppModule {}
