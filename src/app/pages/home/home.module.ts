import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { HomeRoutingModule } from './home-routing.module';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HeroComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule
  ]
})
export class HomeModule { }
