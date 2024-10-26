import { Component } from '@angular/core';
import { DataService } from '../../core/srvices/data/data.service';
import { Product } from '../../core/models/product/product';
import { CurrencyPipe } from '@angular/common';
import { OneProductComponent } from '../one-product/one-product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CurrencyPipe, OneProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private _DataService:DataService){}

  prodArr!: Product[];
  ngOnInit(): void{
    this._DataService.getAllProduct().subscribe((res)=>{
      this.prodArr = res;
    })
  }
}
