import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpModalBaseComponent } from './cmp-modal-base.component';

describe('CmpModalBaseComponent', () => {
  let component: CmpModalBaseComponent;
  let fixture: ComponentFixture<CmpModalBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmpModalBaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CmpModalBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
