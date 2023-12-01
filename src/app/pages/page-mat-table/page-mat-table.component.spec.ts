import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMatTableComponent } from './page-mat-tables.component';

describe('PageMatTableComponent', () => {
  let component: PageTablesComponent;
  let fixture: ComponentFixture<PageMatTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
