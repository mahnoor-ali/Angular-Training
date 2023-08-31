import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AuthComponent } from './auth/auth.component';
import { authGuard } from 'src/auth.guard';

const routes: Routes = [
  {
    path: 'addProduct',
    component: ProductsComponent,
  },
  {
    path: 'editProduct',
    component: ProductsComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'admin',
    component: AdminPanelComponent,
  },
  {
    path: 'SignUp',
    component: AuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
