import { Injectable } from '@angular/core';
import { IPosts } from '../models/iposts';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  constructor(readonly httpClient:HttpClient) {}

  getPosts(): void{
  //getPosts(): Observable<IPosts[]>{
    let list : Observable<any>[] = []

    list.push(this.httpClient.get('https://jsonplaceholder.typicode.com/posts/1'))
    list.push(this.httpClient.get('https://jsonplaceholder.typicode.com/posts/2'))
    list.push(this.httpClient.get('https://jsonplaceholder.typicode.com/posts/3'))


    forkJoin([...list]).subscribe({
      next: (data) => {
        data.forEach (item =>{
          console.log(item);
          
        })
      },
      error: (err)=>{
        console.log(err);
        
      }
    })
    
    //'https://jsonplaceholder.typicode.com/posts'
    
    //return this.httpClient.get<IPosts[]>(url);
  }
}
