import { CartDetailComponent } from './components/pages/cart-detail/cart-detail.component';
import { WarningGuard } from './guards/warning.guard';
import { LoginComponent } from './components/pages/login/login.component';
import { RentCarComponent } from './components/pages/rent-car/rent-car.component';
import { AddCarComponent } from './components/pages/add-car/add-car.component';
import { AddcolorComponent } from './components/pages/addcolor/addcolor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBrandComponent } from './components/pages/add-brand/add-brand.component';
import { UpdateBrandComponent } from './components/pages/update-brand/update-brand.component';
import { CarComponent } from './components/pages/car/car.component';
import { CarListComponent } from './components/pages/car-list/car-list.component';
import { UpdateCarComponent } from './components/pages/update-car/update-car.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarComponent },
  { path: 'brands/addBrand', component: AddBrandComponent,canActivate:[LoginGuard]},
  { path: 'brands/:id', component: UpdateBrandComponent },
  { path: 'addcar', component: AddCarComponent, canDeactivate:[WarningGuard]  },
  { path: 'carlist', component: CarListComponent },
  { path: 'cars/:id', component:  CarListComponent },
  { path: 'updatecar/:id', component: UpdateCarComponent },
  { path: 'cars/brandId/:id', component: CarListComponent },
  { path: 'addcolor', component: AddcolorComponent },
  { path: 'cars/colorId/:id', component: CarListComponent },
  { path: 'rentcar/:id', component: RentCarComponent },
  {path: 'login', component: LoginComponent },
  {path: 'cars', component: CarComponent },
  {path: 'checkout', component: CartDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
