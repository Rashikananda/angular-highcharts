import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HighChartsComponent } from './highCharts/high-charts/high-charts.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { TopicsComponent } from './topics/topics.component';

const routes: Routes = [
  { path: '', redirectTo: '/highCharts', pathMatch: 'full' },
  { path: 'highCharts', component: HighChartsComponent },
  { path: 'consumers', component: ConsumerComponent },
  { path: 'topics', component: TopicsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
