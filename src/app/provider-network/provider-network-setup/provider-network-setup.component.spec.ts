import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderNetworkSetupComponent } from './provider-network-setup.component';

describe('ProviderNetworkSetupComponent', () => {
  let component: ProviderNetworkSetupComponent;
  let fixture: ComponentFixture<ProviderNetworkSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderNetworkSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderNetworkSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
