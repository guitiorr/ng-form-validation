import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {

  userForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    username: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl('Jogja'),
    zip: new FormControl(''),
    isTermsAgreed: new FormControl(false),
  })

  onUserSave(){
    console.log(this.userForm);
  }
}
