import { initialSpinnerState } from './spinner.state';
import { SpinnerActions, ESpinnerActions } from './spinner.actions';
import { ISpinnerState } from '../../models/ISpinnerState';

export const spinnerReducers = (state = initialSpinnerState, action: SpinnerActions): ISpinnerState => {
    switch (action.type) {
        case ESpinnerActions.GetStatus: {
            return {
                ...state,
                status: action.payload.status
            };
        }
        default:
            return state;
    }
};
