import { Component, OnInit } from '@angular/core';
import { ProductStoreService } from '../Services/Product/product-store.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../models/model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  product: Product = {
    id: 0,
    name: '',
    description: '',
    category: '',
    quantity: 0,
    price: 0,
  };
  title: string = '';
  isEdit: boolean = false;
  constructor(
    private productsService: ProductStoreService,
    private router: Router
  ) {
    // get the state of the router and check if the state has item property-- To check if the user is editing or adding a product
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (!(state?.['item'] == null)) {
      this.product = state?.['item'];
    }
    if (state?.['item']) {
      this.title = 'Edit Product';
      this.isEdit = true;
    } else {
      this.title = 'Add Product';
      this.isEdit = false;
    }
  }

  ngOnInit(): void {}
  sucessMsg: string = '';

  onSubmit(productsForm: NgForm) {
    if (this.isEdit) {
      this.editProduct(productsForm);
    } else {
      this.AddProduct(productsForm);
    }
  }

  AddProduct(productsForm: NgForm) {
    this.productsService.addProducts(this.product).subscribe((data) => {
      console.log(data);
    });

    // this.productsService.addProducts(this.product);
    this.sucessMsg = 'Product added successfully';
    productsForm.reset();
  }

  editProduct(productsForm: NgForm) {
    this.productsService.editProducts(this.product).subscribe((data) => {
      console.log(data);
    });
    this.sucessMsg = 'Product edited successfully';
    productsForm.reset();
  }
}
