import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdmModalComponent } from './bdm-modal.component';

describe('BdmModalComponent', () => {
  let component: BdmModalComponent;
  let fixture: ComponentFixture<BdmModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdmModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
