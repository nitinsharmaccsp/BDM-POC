import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdmBreadcrumbComponent } from './bdm-breadcrumb.component';

describe('BdmBreadcrumbComponent', () => {
  let component: BdmBreadcrumbComponent;
  let fixture: ComponentFixture<BdmBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdmBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdmBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
