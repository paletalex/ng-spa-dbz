import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuerreroComponent } from './guerrero.component';

describe('GuerreroComponent', () => {
  let component: GuerreroComponent;
  let fixture: ComponentFixture<GuerreroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuerreroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuerreroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
