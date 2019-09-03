import { Action } from '@ngrx/store';
import { ISpinnerState } from '../../models/ISpinnerState';

export enum ESpinnerActions {
    GetStatus = '[Spinner] Get Status'
}

export class GetStatus implements Action {
    public readonly type = ESpinnerActions.GetStatus;
    constructor(public payload: ISpinnerState) { }
}

export type SpinnerActions = GetStatus;
