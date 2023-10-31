import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Location } from 'src/app/domain/location/interface/location';
import { Service } from 'src/app/domain/service/interface/service';
import { LocationService } from 'src/app/services/location/location.service';
import { ServiceService } from 'src/app/services/service/service.service';

@Component({
  selector: 'app-create-update-hotel',
  templateUrl: './create-update-hotel.component.html',
})
export class CreateUpdateHotelComponent implements OnInit {
  constructor(
    private locationService: LocationService,
    private serviceService: ServiceService,
    private cd: ChangeDetectorRef
  ) {}

  locations: Location[] = [];
  services: Service[] = [];
  previewImgURL: string = '';

  ngOnInit(): void {
    this.getBaseInfo();
  }
  getBaseInfo() {
    forkJoin([this.locationService.getLocations(),this.serviceService.getServices()]).subscribe(
      res => {
        this.locations =  res[0];
        this.services = res[1];
      }
    )
  }

  showPreview(event: any){
    if(event.target.files.length > 0){
      const src = URL.createObjectURL(event.target.files[0]);
      const preview : HTMLElement | any = document.getElementById("file-preview");
      if (preview){
        this.previewImgURL = src;
      }
    }
  }

  clickLoadImage(){
    const fileLoaderInput = document.getElementById("file-loader");
    if (fileLoaderInput) {
      fileLoaderInput.click();
    }
  }
}
