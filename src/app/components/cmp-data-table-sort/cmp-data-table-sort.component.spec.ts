import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpDataTableSortComponent } from './cmp-data-table-sort.component';

describe('CmpDataTableSortComponent', () => {
  let component: CmpDataTableSortComponent;
  let fixture: ComponentFixture<CmpDataTableSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmpDataTableSortComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CmpDataTableSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
