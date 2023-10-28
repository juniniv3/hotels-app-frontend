import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelAdminComponent } from './components/hotel-admin/hotel-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    component: AdminComponent,
    path: '',
    children: [
      { component: HotelAdminComponent, path: 'hotel' }
    ]
  },
];

@NgModule({
  declarations: [
    HotelAdminComponent,
    AdminComponent
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
