import { Routes } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';

export const routes: Routes = [
  {path: '', redirectTo: 'template', pathMatch: 'full'},
  {path: 'template', component: TemplateFormComponent},
];
