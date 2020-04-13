import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/products/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  checked: boolean;

  @Input() product: Product;
  @Input() checkboxes: boolean;
  @Output() selected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  checkHandler() {
    this.selected.emit({id: this.product.uid, checked: this.checked});
  }

}
