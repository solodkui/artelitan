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
import { ClickOutsideDirective } from './directives/outside.directive';
import { SvgComponent } from './components/svg/svg.component';
import { CBreadcrumbsComponent } from './components/c-breadcrumbs/c-breadcrumbs.component';
import { CFilterComponent } from './components/c-filter/c-filter.component';
import { CSortComponent } from './components/c-sort/c-sort.component';
import { ENewsItemComponent } from './elements/e-news-item/e-news-item.component';
import { LanguageComponent } from './components/language/language.component';

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
    ECheckboxComponent,
    ClickOutsideDirective,
    SvgComponent,
    CBreadcrumbsComponent,
    CFilterComponent,
    CSortComponent,
    ENewsItemComponent,
    LanguageComponent
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
    ECheckboxComponent,
    ClickOutsideDirective,
    SvgComponent,
    CBreadcrumbsComponent,
    CFilterComponent,
    CSortComponent,
    ENewsItemComponent,
    LanguageComponent
  ],
})

export class SharedModule { }
