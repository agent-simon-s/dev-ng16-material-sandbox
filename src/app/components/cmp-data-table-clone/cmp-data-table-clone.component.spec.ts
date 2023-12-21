import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpDataTableCloneComponent } from './cmp-data-table-clone.component';

describe('CmpDataTableCloneComponent', () => {
  let component: CmpDataTableCloneComponent;
  let fixture: ComponentFixture<CmpDataTableCloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmpDataTableCloneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CmpDataTableCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
