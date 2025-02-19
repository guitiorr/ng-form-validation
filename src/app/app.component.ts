import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TemplateFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'template-validation';
}
