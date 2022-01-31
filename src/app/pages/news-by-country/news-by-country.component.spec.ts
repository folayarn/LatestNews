import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsByCountryComponent } from './news-by-country.component';

describe('NewsByCountryComponent', () => {
  let component: NewsByCountryComponent;
  let fixture: ComponentFixture<NewsByCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsByCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
