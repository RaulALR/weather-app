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

  public formGroup: any;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<IAppState>
  ) {

  }

  public selectClicked(event) {
    this.store.dispatch(new GetStatus({ status: true }));
    this.submitCountry.emit(event.get('country').value);
  }

  public buildForm() {
    this.formGroup = this.formBuilder.group({
      country: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.buildForm();
  }
}
