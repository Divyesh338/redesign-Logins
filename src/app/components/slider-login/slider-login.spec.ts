import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderLogin } from './slider-login';

describe('SliderLogin', () => {
  let component: SliderLogin;
  let fixture: ComponentFixture<SliderLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
