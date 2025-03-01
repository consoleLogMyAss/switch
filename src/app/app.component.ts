import {Component, signal, WritableSignal} from '@angular/core';
import {SwitchDirective} from './directives/switch.directive';
import {SwitchCaseDirective} from './directives/switch-case.directive';
import {SwitchDefaultDirective} from './directives/switch-default.directive';


@Component({
  selector: 'app-root',
  imports: [
    SwitchDirective,
    SwitchCaseDirective,
    SwitchDefaultDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public count: WritableSignal<number> = signal(1)
}
