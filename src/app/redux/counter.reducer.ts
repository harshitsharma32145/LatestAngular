import { createReducer, on } from '@ngrx/store';
import { increment, decrement, addElement, removeElement } from '../redux/counter.action';
import { AppState } from './app.state';
import { state } from '@angular/animations';


export interface CounterState {
  count: number;
}
// export const initialState: CounterState = {
//     count: 0
// }


// const _counterReducer = createReducer(
//     initialState,
//     on(increment, state => state + 1),
//     on(decrement, state => state - 1)
// );

// export function counterReducer(state: any, action: any) {
//   return _counterReducer(state, action);
// }
// export const reducer = createReducer(
//     initialState,
//     on(increment, state => ({ ...state, count: state.count + 1 })),
//     on(decrement, state=>({ ...state, count: state.count - 1 }))
// )


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const initialStateTable: PeriodicElement[] = []
export const initialStateData = {
  tableData: initialStateTable, // Keep it here if needed
};
export const reducerData = createReducer(
  initialStateData,
  on(addElement, (state, { element }) => {
    // Check if the element already exists in the tableData array based on position
    const index = state.tableData.findIndex(item => item.position === element.position);

    // If it exists, replace it; otherwise, add it to the tableData
    if (index !== -1) {
      // Element exists, replace it
      const updatedTableData = [...state.tableData];
      updatedTableData[index] = element; // Replace the existing element
      return {
        ...state,
        tableData: updatedTableData, // Update state with the new array
      };
    } else {
      // If it doesn't exist, add it to the tableData
      return {
        ...state,
        tableData: [...state.tableData, element], // Add new element to the array
      };
    }
  }),
  on(removeElement, (state, { position }) => ({
    ...state,
    tableData: state.tableData.filter(item => item.position !== position), // Remove element by position
  }))
);