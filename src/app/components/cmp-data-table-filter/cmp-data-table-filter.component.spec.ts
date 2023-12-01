import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpDataTableFilterComponent } from './cmp-data-table-filter.component';

describe('CmpDataTableFilterComponent', () => {
  let component: CmpDataTableFilterComponent;
  let fixture: ComponentFixture<CmpDataTableFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmpDataTableFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CmpDataTableFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
