import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpDataTableDefHackComponent } from './cmp-data-table-def-hack.component';

describe('CmpDataTableDefHackComponent', () => {
  let component: CmpDataTableDefHackComponent;
  let fixture: ComponentFixture<CmpDataTableDefHackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmpDataTableDefHackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CmpDataTableDefHackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
