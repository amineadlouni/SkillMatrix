import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor(private http: HttpClient) { }

  async getAJoke(): Promise<any>{
    const result =  await lastValueFrom(this.http.get('https://official-joke-api.appspot.com/random_joke').pipe(map((result: any) => result)))
    return result;
  }
}
