import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpDataTableDragComponent } from './cmp-data-table-drag.component';

describe('CmpDataTableDragComponent', () => {
  let component: CmpDataTableDragComponent;
  let fixture: ComponentFixture<CmpDataTableDragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmpDataTableDragComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CmpDataTableDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
