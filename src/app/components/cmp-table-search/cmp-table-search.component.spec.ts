import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpTableSearchComponent } from './cmp-table-search.component';

describe('CmpTableSearchComponent', () => {
  let component: CmpTableSearchComponent;
  let fixture: ComponentFixture<CmpTableSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmpTableSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CmpTableSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
