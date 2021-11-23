import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Customer} from '../../models/customer.model';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss']
})
export class CustomerCardComponent implements OnInit {
  @Input() customer: Customer;
  @Output('remove') remove = new EventEmitter<string>();

  get fullName(): string {
    return `${this.customer.firstName} ${this.customer.lastName}`
  }
  constructor() { }

  ngOnInit(): void {
  }

  onRemove(id: string) {
    this.remove.emit(id);
  }
}
