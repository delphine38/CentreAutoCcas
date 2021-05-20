import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererMesGaragesComponent } from './gerer-mes-garages.component';

describe('GererMesGaragesComponent', () => {
  let component: GererMesGaragesComponent;
  let fixture: ComponentFixture<GererMesGaragesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererMesGaragesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererMesGaragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
