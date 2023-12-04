import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CmpMatTablePrototypeComponent } from './cmp-mat-table-prototype.component';

describe('CmpMatTablePrototypeComponent', () => {
  let component: CmpMatTablePrototypeComponent;
  let fixture: ComponentFixture<CmpMatTablePrototypeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpMatTablePrototypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
