import { Component } from '@angular/core';
import { CategoriesService } from '../../core/services/categories/categories.service';
import { Product } from '../../core/models/product/product';
import { OneProductComponent } from '../../layout/one-product/one-product.component';

@Component({
  selector: 'app-electronics',
  standalone: true,
  imports: [OneProductComponent],
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.scss'
})
export class ElectronicsComponent {
  constructor(private _CategoriesService:CategoriesService){}

  prodArr!: Product[];
  ngOnInit(): void{
    this._CategoriesService.getSpecCategory('electronics').subscribe((res)=>{
      this.prodArr = res;
    })
  }
}
