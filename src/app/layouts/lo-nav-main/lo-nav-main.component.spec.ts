import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoNavMainComponent } from './lo-nav-main.component';

describe('LoNavMainComponent', () => {
  let component: LoNavMainComponent;
  let fixture: ComponentFixture<LoNavMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoNavMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoNavMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
