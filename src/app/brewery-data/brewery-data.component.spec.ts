import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryDataComponent } from './brewery-data.component';

describe('BreweryDataComponent', () => {
  let component: BreweryDataComponent;
  let fixture: ComponentFixture<BreweryDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreweryDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
