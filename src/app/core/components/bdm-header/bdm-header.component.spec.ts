import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdmHeaderComponent } from './bdm-header.component';

describe('BdmHeaderComponent', () => {
  let component: BdmHeaderComponent;
  let fixture: ComponentFixture<BdmHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdmHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdmHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
