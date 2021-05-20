import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceDetailleesComponent } from './annonce-detaillees.component';

describe('AnnonceDetailleesComponent', () => {
  let component: AnnonceDetailleesComponent;
  let fixture: ComponentFixture<AnnonceDetailleesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnonceDetailleesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceDetailleesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
