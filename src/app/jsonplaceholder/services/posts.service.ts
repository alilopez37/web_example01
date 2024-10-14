import { Injectable } from '@angular/core';
import { IPosts } from '../models/iposts';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  constructor(readonly httpClient:HttpClient) {}

  getPosts(): Observable<IPosts[]>{
    let url = 'https://jsonplaceholder.typicode.com/posts'
    
    return this.httpClient.get<IPosts[]>(url);
  }
}
