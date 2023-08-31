import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent {
  orderForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.orderForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      items: this.formBuilder.array([])
    });
  }

  get items() {
    return this.orderForm.get('items') as FormArray;
  }

  addItem() {
    const itemGroup = this.formBuilder.group({
      product: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]]
    });

    this.items.push(itemGroup);
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

  onSubmit() {
    if (this.orderForm.valid) {
      console.log(this.orderForm.value);
      // Process order submission
    } else {
      // Handle form validation errors
    }
  }
}
