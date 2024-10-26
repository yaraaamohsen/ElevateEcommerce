import { Component } from '@angular/core';
import { CategoriesService } from '../../core/services/categories/categories.service';
import { Product } from '../../core/models/product/product';
import { OneProductComponent } from '../../layout/one-product/one-product.component';

@Component({
  selector: 'app-wwomens-clothes',
  standalone: true,
  imports: [OneProductComponent],
  templateUrl: './wwomens-clothes.component.html',
  styleUrl: './wwomens-clothes.component.scss'
})
export class WwomensClothesComponent {
  constructor(private _CategoriesService:CategoriesService){}

  prodArr!: Product[];
  ngOnInit(): void{
    this._CategoriesService.getSpecCategory('womensclothing').subscribe((res)=>{
      this.prodArr = res;
    })
  }
}
