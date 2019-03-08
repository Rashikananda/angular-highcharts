import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HighChartsComponent } from './highCharts/high-charts/high-charts.component';

const routes: Routes = [
  { path: '', redirectTo: '/highCharts', pathMatch: 'full' },
  { path: 'highCharts', component: HighChartsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
