import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpDataTableColLoopComponent } from './cmp-data-table-col-loop.component';

describe('CmpDataTableColLoopComponent', () => {
  let component: CmpDataTableColLoopComponent;
  let fixture: ComponentFixture<CmpDataTableColLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmpDataTableColLoopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CmpDataTableColLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
