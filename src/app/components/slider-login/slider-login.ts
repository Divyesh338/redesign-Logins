import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-slider-login',
  imports: [],
  templateUrl: './slider-login.html',
  styleUrl: './slider-login.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SliderLogin {
  isRegister = false;

  activateRegister() {
    this.isRegister = true;
  }

  activateLogin() {
    this.isRegister = false;
  }
}
