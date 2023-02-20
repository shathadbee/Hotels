import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';

const routes: Routes = [
  {path:'',
  redirectTo:'hotel-details',
  pathMatch:'full',},

  {path: 'hotel-details',
  component:HotelDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
