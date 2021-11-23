import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../models/customer.model';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {add, update} from '../../store/actions/customer.action';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  customers$: Observable<Customer[]>;
  customerForm: FormGroup;
  isEdit = false;
  constructor(
    private fb: FormBuilder,
    private store: Store<{customers: Customer[]}>,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {

    const array = new Uint32Array(1);
    const uuid = crypto.getRandomValues(array);
    this.customerForm = this.fb.group({
      id: [array[0]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    });

    const id = this.route.snapshot.params['id'];
    if (id) {
      this.customers$ = this.store.select('customers');
      this.customers$.subscribe(customers => {
        const currentCustomer = customers.find(customer => customer.id == id)
        if (currentCustomer) {
          this.isEdit = true;
          this.customerForm.patchValue(currentCustomer);
        }
      })
    }
  }

  save() {
    const action = this.isEdit ? update : add;
    this.store.dispatch(action({customer: this.customerForm.value}))
    this.router.navigate(['dashboard']);
  }
}
