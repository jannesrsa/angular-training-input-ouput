import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer: any;
  parentCount: number;

  constructor() { }

  ngOnInit() {
    this.parentCount = 1000;

    this.customer = {
      name: 'James Doe',
      address:
      {
        city: 'Cape Town'
      }
    };
  }

  changed(count: number) {
    this.parentCount = count;

    this.customer = {
      name: 'James Doe: ' + count,
      address:
      {
        city: 'Cape Town: ' + count
      }
    };;
  }

}
