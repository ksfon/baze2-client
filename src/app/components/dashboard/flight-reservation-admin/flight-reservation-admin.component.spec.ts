import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightReservationAdminComponent } from './flight-reservation-admin.component';

describe('FlightReservationAdminComponent', () => {
  let component: FlightReservationAdminComponent;
  let fixture: ComponentFixture<FlightReservationAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightReservationAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightReservationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
