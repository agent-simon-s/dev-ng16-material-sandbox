import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgTableCloneComponent } from './pg-table-clone.component';

describe('PgTableCloneComponent', () => {
  let component: PgTableCloneComponent;
  let fixture: ComponentFixture<PgTableCloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgTableCloneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgTableCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
