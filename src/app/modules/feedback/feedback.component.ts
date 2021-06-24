import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  CountryISO,
  PhoneNumberFormat,
  SearchCountryField,
} from 'ngx-intl-tel-input';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  host: { class: 'c-feedback' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedbackComponent {
  feedbackForm: FormGroup;
  loading: boolean = false;
  // Country
  preferredCountries: CountryISO[] = [CountryISO.Russia, CountryISO.Ukraine];
  SearchCountryField = SearchCountryField;
  PhoneNumberFormat = PhoneNumberFormat;
  separateDialCode = false;
  CountryISO = CountryISO;

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {
    this.initFeedbackForm();
  }

  submit(): void {
    this.feedbackForm.markAllAsTouched();
    if (this.feedbackForm.valid) {
      this.loading = true;
    }
  }

  upload(event: any): void {
    const fileTmp = event.target.files[0];
    const formData = new FormData();
    formData.append('file', fileTmp);
  }

  private initFeedbackForm(): void {
    this.feedbackForm = this.fb.group({
      fullname: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      text: ['', Validators.compose([Validators.required])],
      image: [''],
    });
  }

  // Helpers for view
  isControlValid(controlName: string): boolean {
    const control = this.feedbackForm.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.feedbackForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  private readErrors(form: string, errors: any): void {
    Object.keys(errors).forEach((k) => {
      this[form].controls[k.toLowerCase()].setErrors(errors[k]);
    });
    this.loading = false;
    this.cdr.detectChanges();
  }
}
