import { Injectable } from '@angular/core';
import { signUp } from '../../models/model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'Users';

  constructor(private http: HttpClient) {}

  registerUser(user: signUp) {
    console.log('hii');
    return this.http.post(`${environment.apiUrl}/${this.url}`, user);
  }
}
