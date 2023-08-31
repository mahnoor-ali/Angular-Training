import { Component, OnInit } from '@angular/core';
import { ProductStoreService } from '../Services/Product/product-store.service';
import { Product } from '../models/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductStoreService) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
    console.log(this.products);
  }
}
