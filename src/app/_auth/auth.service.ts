import { Injectable } from '@angular/core';
import { CacheService } from './cache.service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends CacheService {

  constructor() {
    super();
   }

   getToken(): string {
    return this.getItem('jwt') ?? '';
  }
  
  protected setToken(jwt: string) {
    this.setItem('jwt', jwt);
  } 

  protected clearToken() {
    this.removeItem('jwt');
  }
  protected hasExpiredToken(): boolean {
    const jwt = this.getToken();

    if (jwt) {
      const payload = jwt_decode(jwt) as any;
      return Date.now() >= payload.exp * 1000;
    }

    return true;
  }
}
