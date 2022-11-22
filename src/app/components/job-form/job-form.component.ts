import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Observable } from 'rxjs';
import { TagsModel } from '../../models/tags.model';
import { JobService } from '../../services/job.service';
import { TagsService } from '../../services/tags.service';
import {MatCheckboxChange} from "@angular/material/checkbox";


@Component({
  selector: 'app-job-form',
  styleUrls: ['./job-form.component.scss'],
  templateUrl: './job-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobFormComponent {
  readonly tags$: Observable<TagsModel[]> = this._tagsService.getAll();
   public jobForm: FormGroup = new FormGroup({ title: new FormControl(), description: new FormControl(), jobTagsIds: new FormControl() });
    private ctrl: any;
    constructor(private _jobService: JobService, private _tagsService: TagsService, private formBuilder: FormBuilder) {}

initModuleForm(): FormGroup{
        return this.formBuilder.group({
            title: '',
            description: '',
            tags: new FormArray([])
        })
}
    public tagsArray: number[]=[]


    onChange(event: MatCheckboxChange){
        //let tagsArray: FormArray = this.jobForm.get('jobTagsIds') as FormArray;
        if (event.checked){
            this.tagsArray.push(Number(event.source.value))
        }
        return this.tagsArray
        }


  onJobFormSubmitted(jobForm: FormGroup): void {
      this._jobService.create({
          title: jobForm.get('title')?.value,
          description: jobForm.get('description')?.value,
          jobTagIds: this.tagsArray,

      }).subscribe()

  }}

