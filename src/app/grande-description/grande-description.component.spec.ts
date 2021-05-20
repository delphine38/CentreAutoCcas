import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandeDescriptionComponent } from './grande-description.component';

describe('GrandeDescriptionComponent', () => {
  let component: GrandeDescriptionComponent;
  let fixture: ComponentFixture<GrandeDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandeDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandeDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
