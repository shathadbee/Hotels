import { Component } from '@angular/core';
import SwiperCore, { Autoplay,EffectFade } from "swiper";

SwiperCore.use([Autoplay,EffectFade]);
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  sliderNavData = [
    {
      id: 1,
      img: 'assets/img/slider/nav/slider-nav-4.jpg',
      title: "6 Courses",
      subtitle: "Programming Languages",
      bgColor: "orange-bg",
    },
    {
      id: 2,
      img: 'assets/img/slider/nav/slider-nav-1.jpg',
      title: "4 Courses",
      subtitle: "Idea Discussion",
      bgColor: "blue-bg",
    },
    {
      id: 3,
      img: 'assets/img/slider/nav/slider-nav-2.jpg',
      title: "8 Courses",
      subtitle: "Web Development",
      bgColor: "pink-bg",
    },
    {
      id: 4,
      img: 'assets/img/slider/nav/slider-nav-3.jpg',
      title: "9 Courses",
      subtitle: "System Administration",
      bgColor: "green-bg",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
