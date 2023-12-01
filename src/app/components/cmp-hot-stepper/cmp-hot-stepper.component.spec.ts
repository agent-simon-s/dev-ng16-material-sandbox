import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpHotStepperComponent } from './cmp-hot-stepper.component';

describe('CmpHotStepperComponent', () => {
  let component: CmpHotStepperComponent;
  let fixture: ComponentFixture<CmpHotStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmpHotStepperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CmpHotStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
