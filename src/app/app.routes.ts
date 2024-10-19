import { Routes } from '@angular/router';
import path from 'path';
import { ShoppingComponent } from './cart/shopping/shopping.component';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './cart/home/home.component';

export const routes: Routes = [
    {
        path:"shopping",
      component:ShoppingComponent
    },
    {
        path:'',
        component:TableComponent
    },
    {
        path:'home',
        component:HomeComponent
    }
];
