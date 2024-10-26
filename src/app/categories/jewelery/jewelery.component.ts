import { Component } from '@angular/core';
import { CategoriesService } from '../../core/services/categories/categories.service';
import { Product } from '../../core/models/product/product';
import { OneProductComponent } from '../../layout/one-product/one-product.component';

@Component({
  selector: 'app-jewelery',
  standalone: true,
  imports: [OneProductComponent],
  templateUrl: './jewelery.component.html',
  styleUrl: './jewelery.component.scss'
})
export class JeweleryComponent {
  constructor(private _CategoriesService:CategoriesService){}

  prodArr!: Product[];
  ngOnInit(): void{
    this._CategoriesService.getSpecCategory('jewelery').subscribe((res)=>{
      this.prodArr = res;
    })
  }
}
