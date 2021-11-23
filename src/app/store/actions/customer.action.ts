import { createAction, props } from '@ngrx/store';
import {Customer} from '../../models/customer.model';

export const add = createAction(
  '[Customer] Add',
  props<{ customer: Customer }>()
);
export const update = createAction(
  '[Customer] Edit',
  props<{ customer: Customer }>()
);
export const remove = createAction(
  '[Customer] Remove',
  props<{ id: string }>()
);
