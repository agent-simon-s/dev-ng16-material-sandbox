import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpDataTableComponent } from './cmp-data-table.component';

describe('CmpDataTableComponent', () => {
  let component: CmpDataTableComponent;
  let fixture: ComponentFixture<CmpDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmpDataTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CmpDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
