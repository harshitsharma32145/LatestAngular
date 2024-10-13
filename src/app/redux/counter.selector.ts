import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { state } from "@angular/animations";

export const selectCounerState=(state:AppState)=>state.count;

export const selectCount=createSelector(selectCounerState,(state)=>state.count)