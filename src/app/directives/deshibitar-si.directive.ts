import { Directive, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: `
  [formControl][appDeshibitarSi],
  [formControlName][appDeshibitarSi]`,
  standalone: true
})
export class DeshibitarSiDirective {
  @Input('appDeshibitarSi') set deshabitarSi(condition: boolean){
    const control = this.ngControl.control;

    condition ? control?.disable() : control?.enable();
  }
  constructor(private ngControl: NgControl) { }

}
