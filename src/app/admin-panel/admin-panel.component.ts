import { Component, OnInit } from '@angular/core';
import { Product } from '../models/model';
import { ProductStoreService } from '../Services/Product/product-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  productStock: Product[] = [];

  constructor(
    private prodService: ProductStoreService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getAllProducts();
  }

  goToEditPage(item: any) {
    // this.router.navigateByUrl(`/editProduct/${item.id}`, {
    //   state: { item: item },
    // });
    const state = { item };
    this.router.navigate(['editProduct'], { state });
  }

  getAllProducts(): Product[] {
    this.prodService.getProducts().subscribe((data) => {
      this.productStock = data;
      console.log(this.productStock);
    });
    return this.productStock;
  }

  deleteProduct(product: Product): void {
    alert('Are you sure you want to delete this product?');
    this.prodService.deleteProduct(product.id).subscribe((data) => {
      console.log(data);
    });
    this.getAllProducts();
  }

  editProduct(product: Product): void {
    this.prodService.editProducts(product).subscribe((data) => {
      console.log(data);
      this.getAllProducts();
    });
  }
}
