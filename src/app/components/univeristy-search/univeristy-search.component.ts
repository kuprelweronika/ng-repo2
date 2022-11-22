import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {BehaviorSubject, debounceTime, map, Observable, subscribeOn, switchMap} from 'rxjs';
import { UniversityModel } from '../../models/university.model';
import { UniversityService } from '../../services/university.service';
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-univeristy-search',
  styleUrls: ['./univeristy-search.component.scss'],
  templateUrl: './univeristy-search.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniveristySearchComponent {
    constructor(private _universityService: UniversityService) {
    }
  readonly search: FormGroup = new FormGroup({ country: new FormControl() });
    private _countrySubject: BehaviorSubject<string> = new BehaviorSubject<string>(' ');

    public country$: Observable<string> = this.search.valueChanges.pipe(
        map(form=>form.country), debounceTime(1000))

    readonly list$: Observable<UniversityModel[]>=this.country$.pipe(
        switchMap(data => {
            if(!data){
                return [];}
            return this._universityService.getAll(data)}))



  onSearchSubmitted(search: FormGroup): void {
      this._countrySubject.next((search.get('country')?.value))


  }
}
