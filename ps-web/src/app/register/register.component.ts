import { Customer } from './../shared/sdk/models/Customer';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';

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
      name: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+')]]
    });

    const emailControl = this.registerForm.get('email');
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
    const customer: Customer = new Customer();
    let p = Object.assign({}, customer, this.registerForm.value);
    console.log(p);
  }


}
