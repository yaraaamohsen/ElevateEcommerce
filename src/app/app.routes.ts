import { Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ElectronicsComponent } from './categories/electronics/electronics.component';
import { JeweleryComponent } from './categories/jewelery/jewelery.component';
import { MensClothesComponent } from './categories/mens-clothes/mens-clothes.component';
import { WwomensClothesComponent } from './categories/wwomens-clothes/wwomens-clothes.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'electronics', component: ElectronicsComponent},
    {path: 'jewelery', component: JeweleryComponent},
    {path: 'menClothes', component: MensClothesComponent},
    {path: 'womenClothes', component: WwomensClothesComponent},
];
