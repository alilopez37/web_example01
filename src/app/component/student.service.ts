import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  private apiUrl = 'https://rickandmortyapi.com/api/character'
  private students: any[] = []

  constructor(private readonly http: HttpClient) {}
  
  addStudent(item: any): Observable<any> {
    return this.http.post(this.apiUrl,item)
  }
  removeStudent(index:number):void {
    this.students.splice(index,1)
  }

  getStudents(): Observable<any> {
    
    return this.http.get(this.apiUrl);
  }

  clearStudents(): void {
    this.students = [];
  }
}
