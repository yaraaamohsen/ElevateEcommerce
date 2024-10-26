import { Component, Input } from '@angular/core';
import { Product } from '../../core/models/product/product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-one-product',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './one-product.component.html',
  styleUrl: './one-product.component.scss'
})
export class OneProductComponent {
  @Input() product!: Product;
}
