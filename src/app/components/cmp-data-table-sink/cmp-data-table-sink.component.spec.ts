import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpDataTableSinkComponent } from './cmp-data-table-sink.component';

describe('CmpDataTableSinkComponent', () => {
  let component: CmpDataTableSinkComponent;
  let fixture: ComponentFixture<CmpDataTableSinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmpDataTableSinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CmpDataTableSinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
