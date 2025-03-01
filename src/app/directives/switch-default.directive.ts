import {
  Directive, effect, EffectRef,
  inject,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {SwitchDirective} from './switch.directive';

@Directive({
  selector: '[mySwitchDefault]'
})
export class SwitchDefaultDirective<T> {
  private tpl: TemplateRef<unknown> = inject(TemplateRef);
  private vcr: ViewContainerRef = inject(ViewContainerRef);
  private switchDir: SwitchDirective<T> = inject(SwitchDirective);

  effRef: EffectRef = effect(() => {
    if (!this.switchDir.isConditionMet()) {
      this.vcr.createEmbeddedView(this.tpl)
    } else {
      this.vcr.clear();
    }
  })
}
