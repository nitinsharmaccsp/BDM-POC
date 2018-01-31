import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostShareSetupComponent } from './cost-share-setup.component';

describe('CostShareSetupComponent', () => {
  let component: CostShareSetupComponent;
  let fixture: ComponentFixture<CostShareSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostShareSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostShareSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
