import { Component, OnInit } from '@angular/core';
import { HotelsAPIService } from 'src/app/services/hotels-api.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {
  dataArray: any[] = [];
  constructor(private hotelsAPI: HotelsAPIService) {}


  ngOnInit(): void {
    this.getAlHotels();

  }


getAlHotels(){
  this.hotelsAPI.getHotels().subscribe((result:any) =>{
    if (result){
      this.dataArray=result;   }

  }
  )
}
}
