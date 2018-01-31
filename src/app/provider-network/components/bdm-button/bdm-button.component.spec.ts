import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdmButtonComponent } from './bdm-button.component';

describe('BdmButtonComponent', () => {
  let component: BdmButtonComponent;
  let fixture: ComponentFixture<BdmButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdmButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdmButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
