import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    OrderFormComponent,
    HomeComponent,
    HeaderComponent,
    AdminPanelComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
