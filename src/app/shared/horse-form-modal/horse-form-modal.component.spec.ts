import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorseFormModalComponent } from './horse-form-modal.component';

describe('HorseFormModalComponent', () => {
  let component: HorseFormModalComponent;
  let fixture: ComponentFixture<HorseFormModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorseFormModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorseFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
