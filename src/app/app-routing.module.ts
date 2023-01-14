import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinDetailComponent } from './components/coin-detail/coin-detail.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'coin/:id', component: CoinDetailComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
