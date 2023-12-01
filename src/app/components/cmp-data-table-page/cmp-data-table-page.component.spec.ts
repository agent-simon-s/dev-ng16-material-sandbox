import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpDataTablePageComponent } from './cmp-data-table-page.component';

describe('CmpDataTablePageComponent', () => {
  let component: CmpDataTablePageComponent;
  let fixture: ComponentFixture<CmpDataTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmpDataTablePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CmpDataTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
