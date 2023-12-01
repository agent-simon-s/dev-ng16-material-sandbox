import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpDataTableLoopComponent } from './cmp-data-table-loop.component';

describe('CmpDataTableLoopComponent', () => {
  let component: CmpDataTableLoopComponent;
  let fixture: ComponentFixture<CmpDataTableLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmpDataTableLoopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CmpDataTableLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
