import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { JobFormComponent } from './components/job-form/job-form.component';
import { RegisterFormComponentModule } from './components/register-form/register-form.component-module';
import { UserServiceModule } from './services/user.service-module';
import { JobFormComponentModule } from './components/job-form/job-form.component-module';
import { JobServiceModule } from './services/job.service-module';
import { TagsServiceModule } from './services/tags.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'create-user-with-role', component: RegisterFormComponent }, { path: 'create-job', component: JobFormComponent }]), RegisterFormComponentModule, UserServiceModule, JobFormComponentModule, JobServiceModule, TagsServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
