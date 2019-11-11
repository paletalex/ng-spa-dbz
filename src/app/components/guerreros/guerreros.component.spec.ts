import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuerrerosComponent } from './guerreros.component';

describe('GuerrerosComponent', () => {
  let component: GuerrerosComponent;
  let fixture: ComponentFixture<GuerrerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuerrerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuerrerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
