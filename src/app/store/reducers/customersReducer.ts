
import {createReducer, on} from '@ngrx/store';
import {add, update, remove} from '../actions/customer.action';
import {Customer} from '../../models/customer.model';

const initialState: Array<Customer> = [
  {
    id: '0',
    firstName: 'Just',
    lastName: 'Name',
    age: 34,
    phone: '0503333333',
    address: 'bla bla street 12'
  },
];
export const customerReducer = createReducer(
  initialState,
  on(add, (state, {customer}) => [...state, customer]),
  on(update, (state, {customer}) => {
    const customerIndex = state.findIndex(c => c.id == customer.id);
    if (customerIndex !== -1) {
      const newState = [...state];
      newState[customerIndex] = customer;
      return newState;
    } else {
      return state;
    }
  }),
  on(remove, (state, {id}) => state.filter((customer) => customer.id !== id))
);
