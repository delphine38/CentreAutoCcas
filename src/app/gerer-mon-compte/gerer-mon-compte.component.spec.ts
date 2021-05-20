import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererMonCompteComponent } from './gerer-mon-compte.component';

describe('GererMonCompteComponent', () => {
  let component: GererMonCompteComponent;
  let fixture: ComponentFixture<GererMonCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererMonCompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererMonCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
