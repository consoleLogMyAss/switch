import {
  Directive, effect, EffectRef,
  inject,
  input,
  InputSignal, OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {SwitchDirective} from './switch.directive';

@Directive({
  selector: '[mySwitchCase]'
})
export class SwitchCaseDirective<T> {
  private tpl: TemplateRef<unknown> = inject(TemplateRef);
  private vcr: ViewContainerRef = inject(ViewContainerRef);
  private switchDir: SwitchDirective<T> = inject(SwitchDirective);

  public mySwitchCase: InputSignal<T> = input.required();

  public effRef: EffectRef = effect(() => {
    if (this.mySwitchCase() === this.switchDir.mySwitch()) {
      this.switchDir.isConditionMet.set(true);
      this.vcr.createEmbeddedView(this.tpl);
    } else {
      this.vcr.clear();
    }
  })
}
