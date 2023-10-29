import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelAdminComponent } from './components/hotel-admin/hotel-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CreateUpdateHotelComponent } from './components/create-update-hotel/create-update-hotel.component';

const routes: Routes = [
  {
    component: AdminComponent,
    path: '',
    children: [
      { component: HotelAdminComponent, path: 'hotel' },
      { component: CreateUpdateHotelComponent, path: 'hotel/edit' }
    ]
  },
];

@NgModule({
  declarations: [
    HotelAdminComponent,
    AdminComponent,
    CreateUpdateHotelComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
})
export class AdminModule { }
