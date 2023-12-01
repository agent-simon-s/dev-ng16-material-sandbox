import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoHeaderMainComponent } from './lo-header-main.component';

describe('LoHeaderMainComponent', () => {
  let component: LoHeaderMainComponent;
  let fixture: ComponentFixture<LoHeaderMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoHeaderMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoHeaderMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
