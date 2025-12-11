import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgpdBanner } from './lgpd-banner';

describe('LgpdBanner', () => {
  let component: LgpdBanner;
  let fixture: ComponentFixture<LgpdBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LgpdBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LgpdBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
