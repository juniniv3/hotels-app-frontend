import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/domain/location/interface/location';
import { LocationService } from 'src/app/services/location/location.service';

@Component({
  selector: 'app-create-update-hotel',
  templateUrl: './create-update-hotel.component.html',
})
export class CreateUpdateHotelComponent implements OnInit {
  constructor(private locationService: LocationService){}
  locations: Location [] = [];
  ngOnInit(): void {
    this.getLocations();
  }
  getLocations(){
    this.locationService.getLocations().subscribe(
      res => {
        this.locations = res;
        console.log(res);
      }
    );
  }
}
