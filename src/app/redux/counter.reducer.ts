import { createReducer, on } from '@ngrx/store';
import { increment, decrement } from '../redux/counter.action';
import { AppState } from './app.state';
import { state } from '@angular/animations';


export interface CounterState {
    count: number;
  }
  
export const initialState: CounterState = {
    count: 0
}

// const _counterReducer = createReducer(
//     initialState,
//     on(increment, state => state + 1),
//     on(decrement, state => state - 1)
// );

// export function counterReducer(state: any, action: any) {
//   return _counterReducer(state, action);
// }
export const reducer = createReducer(
    initialState,
    on(increment, state => ({ ...state, count: state.count + 1 })),
    on(decrement, state=>({ ...state, count: state.count - 1 }))
)
