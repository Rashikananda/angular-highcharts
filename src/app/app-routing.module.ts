import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HighChartsComponent } from "./highCharts/high-charts/high-charts.component";
import { ConsumersComponent } from "./consumers/consumers.component";
import { TopicsComponent } from "./topics/topics.component";
import { CommonComponent } from "./common/common.component";
// import { CommonHighChartsComponent } from './highCharts/common-high-charts/common-high-charts';

const routes: Routes = [
  { path: "", redirectTo: "/Dashboard", pathMatch: "full" },
  { path: "Dashboard", component: HighChartsComponent },
  { path: "consumers", component: ConsumersComponent },
  { path: "consumers/:id", component: CommonComponent },
  { path: "topics", component: TopicsComponent },
  { path: "topics/:id", component: CommonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
