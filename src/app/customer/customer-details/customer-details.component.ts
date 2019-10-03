import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerDetailsComponent implements OnInit {
  @Input() childCount: number;
  @Output() _changed = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  change(): void {
    this.childCount++;
    this._changed.emit(this.childCount);
  }
}
