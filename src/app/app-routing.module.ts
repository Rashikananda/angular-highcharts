import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HighChartsComponent } from './highCharts/high-charts/high-charts.component';
import { ConsumersComponent } from './consumers/consumers.component';
import { TopicsComponent } from './topics/topics.component';

const routes: Routes = [
  { path: '', redirectTo: '/highCharts', pathMatch: 'full' },
  { path: 'highCharts', component: HighChartsComponent },
  { path: 'consumers', component: ConsumersComponent },
  { path: 'consumers/:consumerId', component: ConsumersComponent },
  { path: 'topics', component: TopicsComponent },
  { path: 'topics/:topicId', component: TopicsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
