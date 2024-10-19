import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { state } from "@angular/animations";
import { PeriodicElement } from "./counter.reducer";

// export const selectCounerState=(state:AppState)=>state.count;

// export const selectCount=createSelector(selectCounerState,(state)=>state.count)
export const selectTableData = (state: AppState) => [state.tableData]; // Adjust based on your structure


export const selectTableDataWithSelector = createSelector(
    selectTableData,
    (tableData) => Array.isArray(tableData) ? tableData : tableData // Ensure it's always an array
);