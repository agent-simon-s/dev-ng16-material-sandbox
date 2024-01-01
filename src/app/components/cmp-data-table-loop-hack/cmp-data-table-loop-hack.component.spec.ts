import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpDataTableLoopHackComponent } from './cmp-data-table-loop-hack.component';

describe('CmpDataTableLoopHackComponent', () => {
  let component: CmpDataTableLoopHackComponent;
  let fixture: ComponentFixture<CmpDataTableLoopHackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmpDataTableLoopHackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CmpDataTableLoopHackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
