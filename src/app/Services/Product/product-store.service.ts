import { Injectable } from '@angular/core';
import { Product } from '../../models/model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductStoreService {
  private url = 'Products';

  constructor(private http: HttpClient) {}

  addProducts(product: Product): Observable<Product> {
    return this.http.post<Product>(
      `${environment.apiUrl}/${this.url}`,
      product
    );
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/${this.url}`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.apiUrl}/${this.url}/${id}`);
  }

  editProducts(product: Product) {
    console.log('Hey THERE--- PUT **');
    return this.http.put(
      `${environment.apiUrl}/${this.url}/${product.id}`,
      product
    );
  }
  deleteProduct(id: number) {
    return this.http.delete(`${environment.apiUrl}/${this.url}/${id}`);
  }
}
