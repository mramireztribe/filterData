import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodashCustomizedFiltersComponent } from './lodash-customized-filters.component';

describe('LodashCustomizedFiltersComponent', () => {
  let component: LodashCustomizedFiltersComponent;
  let fixture: ComponentFixture<LodashCustomizedFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LodashCustomizedFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LodashCustomizedFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
