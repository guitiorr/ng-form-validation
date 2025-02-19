import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {

  userForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('Jogja', [Validators.required]),
    zip: new FormControl('', [Validators.required]),
    isTermsAgreed: new FormControl(false, [Validators.required]),
  })

  onUserSave(){
    console.log(this.userForm);
  }
}
