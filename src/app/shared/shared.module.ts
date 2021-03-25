import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MissingTranslationHandler, MissingTranslationHandlerParams, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from 'src/environments/environment';
import { ECircleComponent } from './elements/e-circle/e-circle.component';
import { CSearchComponent } from './components/c-search/c-search.component';
import { ECheckboxComponent } from './elements/e-checkbox/e-checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(
    http,
    environment.translate.prefix,
    environment.translate.suffix
  );
}

export class MissingTranslationService implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    return `WARN: '${params.key}' is missing in '${params.translateService.currentLang}' locale`;
  }
}

@NgModule({
  declarations: [
    ECircleComponent,
    CSearchComponent,
    ECheckboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MissingTranslationService },
      useDefaultLang: false,
    })
  ],
  exports: [
    TranslateModule,
    ECircleComponent,
    CSearchComponent,
    ECheckboxComponent
  ],
})

export class SharedModule { }
