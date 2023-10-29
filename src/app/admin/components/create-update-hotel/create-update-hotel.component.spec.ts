import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateHotelComponent } from './create-update-hotel.component';
import { HttpClientModule } from '@angular/common/http';

describe('CreateUpdateHotelComponent', () => {
  let component: CreateUpdateHotelComponent;
  let fixture: ComponentFixture<CreateUpdateHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateUpdateHotelComponent],
      imports: [HttpClientModule]
    });
    fixture = TestBed.createComponent(CreateUpdateHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
