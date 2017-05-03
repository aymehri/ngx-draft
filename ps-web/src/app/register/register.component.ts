import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';


function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  let emailControl = c.get('email');
  let confirmControl = c.get('confirmEmail');

  if (emailControl.pristine || confirmControl.pristine) {
    return null;
  }

  if (emailControl.value === confirmControl.value) {
    return null;
  }
  return { 'match': true };
}

@Component({
  selector: 'pm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  emailMessage: string;
  private validationMessages = {
        required: 'Please enter your email address.',
        pattern: 'Please enter a valid email address.'
    };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+')]],
        confirmEmail: ['', Validators.required],
      }, { validator: emailMatcher }),
      phone: '',
      notification: 'email',
      sendCatalog: true
    });

    const emailControl = this.registerForm.get('emailGroup.email');
        emailControl.valueChanges.debounceTime(1000).subscribe(value =>
            this.setMessage(emailControl));
  }

  setMessage(c: AbstractControl): void {
        this.emailMessage = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.emailMessage = Object.keys(c.errors).map(key =>
                this.validationMessages[key]).join(' ');
        }
    }

  save(): void {
    console.log('Saved: ' + JSON.stringify(this.registerForm.value));
  }


}
