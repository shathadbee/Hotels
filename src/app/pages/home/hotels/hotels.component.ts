import { Component, OnInit } from '@angular/core';
import { IHotels } from 'src/app/models/hotels.interface';
import { HotelsAPIService } from 'src/app/services/hotels-api.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent  implements OnInit{

  dataArray :any;
  constructor(private  hotelsAPI: HotelsAPIService){ }

  ngOnInit(): void {
this.getAlHotels();
  }
getAlHotels(){
  this.hotelsAPI.getHotels().subscribe((result) =>{
    if (result){
      this.dataArray=result;

        }
  }

  )

}
tabChanged($event:any){

}
}
