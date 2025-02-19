import { Component } from '@angular/core';
import { User } from '../user';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent {
  userObj: User = {
    firstName: "",
    lastName: "",
    username: "",
    city: "",
    state: "",
    zip: "",
    isTermsAgreed: false,
  }
}
