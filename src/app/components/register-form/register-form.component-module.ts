import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { RoleServiceModule } from '../../services/role.service-module';
import { RegisterFormComponent } from './register-form.component';
import {MatRadioModule} from "@angular/material/radio";

@NgModule({
    imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, RoleServiceModule, MatSelectModule, MatOptionModule, MatRadioModule],
  declarations: [RegisterFormComponent],
  providers: [],
  exports: [RegisterFormComponent]
})
export class RegisterFormComponentModule {
}
