import {Customer} from '../../models/customer.model';

export interface State {
  readonly customers: Array<Customer>;
}
