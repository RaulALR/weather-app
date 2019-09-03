import { ISpinnerState } from '../../models/ISpinnerState';
import { createSelector } from '@ngrx/store';
import { IAppState } from '../app.state';

const selectSpinner = (state: IAppState) => state.spinnerStatus;

export const selectSpinnerList = createSelector(
    selectSpinner,
    (state: ISpinnerState) => state
);
