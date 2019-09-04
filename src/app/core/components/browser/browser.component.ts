import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../redux/app.state';
import { GetStatus } from '../../../redux/spinner-reducer/spinner.actions';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss']
})

export class BrowserComponent implements OnInit {
  @Output()
  public submitCountry = new EventEmitter<any>();

  // This component has a reactive form to search by city
  public formGroup: any;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<IAppState>
  ) { }

  // When button is clicked, it change the status of loading spinner and emit the event
  // In home component this event will be catch and will dispatch the effect with chose city
  public selectClicked(event) {
    this.store.dispatch(new GetStatus({ status: true }));
    this.submitCountry.emit(event.get('country').value);
  }

  // Reactive form builder
  public buildForm() {
    this.formGroup = this.formBuilder.group({
      country: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.buildForm();
  }
}
