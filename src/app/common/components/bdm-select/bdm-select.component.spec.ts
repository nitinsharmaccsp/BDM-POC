import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdmSelectComponent } from './bdm-select.component';

describe('BdmSelectComponent', () => {
  let component: BdmSelectComponent;
  let fixture: ComponentFixture<BdmSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdmSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdmSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
