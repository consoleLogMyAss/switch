import {
  Directive,
  input,
  InputSignal,
  linkedSignal,
  WritableSignal
} from '@angular/core';

@Directive({
  selector: '[mySwitch]'
})
export class SwitchDirective<T> {
  public mySwitch: InputSignal<T> = input.required();

  public isConditionMet: WritableSignal<boolean> = linkedSignal({
    source: () => this.mySwitch(),
    computation: () => false,
  });
}
