import { createAction, props } from '@ngrx/store'; 
import { PeriodicElement } from './counter.reducer';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');


export const addElement = createAction(
    '[Table] Add Element',
  props<{element: PeriodicElement } >()
  );
  
export const removeElement = createAction(
    '[Table] Remove Element',
    props<{ position: number }>()
  );