import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelAdminComponent } from './components/hotel-admin/hotel-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';

const routes: Routes = [
  {
    path: 'panel',
    component: AdminPanelComponent,
  },
];

@NgModule({
  declarations: [
    HotelAdminComponent,
    AdminPanelComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AdminModule { }
