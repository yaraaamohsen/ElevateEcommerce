import { Component } from '@angular/core';
import { CategoriesService } from '../../core/services/categories/categories.service';
import { Product } from '../../core/models/product/product';
import { OneProductComponent } from '../../layout/one-product/one-product.component';

@Component({
  selector: 'app-mens-clothes',
  standalone: true,
  imports: [OneProductComponent],
  templateUrl: './mens-clothes.component.html',
  styleUrl: './mens-clothes.component.scss'
})
export class MensClothesComponent {
  constructor(private _CategoriesService:CategoriesService){}

  prodArr!: Product[];
  ngOnInit(): void{
    this._CategoriesService.getSpecCategory('mensclothing').subscribe((res)=>{
      this.prodArr = res;
    })
  }
}
