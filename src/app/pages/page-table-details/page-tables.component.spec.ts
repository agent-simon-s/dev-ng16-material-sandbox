import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTableDetailComponent } from './page-tables.component';

describe('PageTableDetailComponent', () => {
  let component: PageTableDetailComponent;
  let fixture: ComponentFixture<PageTableDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTableDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageTableDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
