import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  host: { class: 'c-language' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageComponent {
  language: string = 'ru';

  constructor(private translateService: TranslateService) {}

  changeLanguage(): void {
    if (typeof window !== 'undefined') {
      if (this.language === 'ru') {
        this.language = 'en';
      } else {
        this.language = 'ru';
      }
      this.translateService.use(this.language);
    }
  }
}
