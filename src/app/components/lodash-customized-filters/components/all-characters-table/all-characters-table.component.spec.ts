import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCharactersTableComponent } from './all-characters-table.component';

describe('AllCharactersTableComponent', () => {
  let component: AllCharactersTableComponent;
  let fixture: ComponentFixture<AllCharactersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCharactersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCharactersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
