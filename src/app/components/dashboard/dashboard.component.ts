import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs';
import {Customer} from '../../models/customer.model';
import {remove} from '../../store/actions/customer.action';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  customers$: Observable<Customer[]>
  constructor(private store: Store<{ customers: Customer[] }>) {
    this.customers$ = store.select('customers');
  }

  ngOnInit(): void {
  }

  remove(customer: Customer) {
    this.store.dispatch(remove({id: customer.id}));
  }

}
