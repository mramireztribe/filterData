import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitArrayComponent } from './split-array.component';

describe('SplitArrayComponent', () => {
  let component: SplitArrayComponent;
  let fixture: ComponentFixture<SplitArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
