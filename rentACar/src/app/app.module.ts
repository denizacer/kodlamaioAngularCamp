import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './common/navi/navi.component';
import { BrandComponent } from './common/brand/brand.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { UpdateBrandComponent } from './components/pages/update-brand/update-brand.component';
import { AddBrandComponent } from './components/pages/add-brand/add-brand.component';
import { ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import {RippleModule} from 'primeng/ripple';


import { ColorComponent } from './common/color/color.component';
import { AddcolorComponent } from './components/pages/addcolor/addcolor.component';
import { AddCarComponent } from './components/pages/add-car/add-car.component';
import { CarComponent } from './components/pages/car/car.component';
import { CarListComponent } from './components/pages/car-list/car-list.component';
import { UpdateCarComponent } from './components/pages/update-car/update-car.component';
import { RentCarComponent } from './components/pages/rent-car/rent-car.component';
import { CartSummaryComponent } from './common/cart-summary/cart-summary.component';
import {DropdownModule} from 'primeng/dropdown';
import { LoginComponent } from './components/pages/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CartDetailComponent } from './components/pages/cart-detail/cart-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    UpdateBrandComponent,
    AddBrandComponent,
    ColorComponent,
    AddcolorComponent,
    AddCarComponent,
    CarComponent,
    CarListComponent,
    UpdateCarComponent,
    RentCarComponent,
    CartSummaryComponent,
    LoginComponent,
    CartDetailComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    BrowserAnimationsModule,
    RippleModule,
    DropdownModule
    
    
  ],
  providers: [MessageService,{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
