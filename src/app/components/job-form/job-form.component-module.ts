import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { JobFormComponent } from './job-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
    imports: [
        MatCardModule,


        MatCheckboxModule,
        MatFormFieldModule,
        MatSelectModule,
        MatOptionModule,
        CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        FormsModule,
    ],
  declarations: [JobFormComponent],
  providers: [DatePipe],
  exports: [JobFormComponent]
})
export class JobFormComponentModule {
}
