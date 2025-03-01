import {Directive, input, InputSignal, signal, WritableSignal} from '@angular/core';

@Directive({
  selector: '[mySwitch]'
})
export class SwitchDirective<T> {
  public mySwitch: InputSignal<T> = input.required({
    transform: (value: T) => {
      this.isConditionMet.set(false)
      return value;
    }
  });

  public isConditionMet: WritableSignal<boolean> = signal(false);
}
