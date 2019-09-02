import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightReservationUserComponent } from './flight-reservation-user.component';

describe('FlightReservationUserComponent', () => {
  let component: FlightReservationUserComponent;
  let fixture: ComponentFixture<FlightReservationUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightReservationUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightReservationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
