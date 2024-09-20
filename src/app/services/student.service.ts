import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students : Student[] = [];

  constructor() { }

  public addStudent(student : Student) : boolean {
    let tam = this.students.length;
    let flag = false;
    this.students.push(student)
    if (this.students.length - tam === 1) flag = true;
    return flag;
  }

  public findStudent(firstName : string) : Student | undefined{
    return this.students.find(student => student.firstName === firstName)
  }

  public deleteStudent (firstName : string): number {
    let index = this.students.findIndex(student => student.firstName === firstName);
    let num = 0;

    if (index !== -1)
      num = this.students.splice(index,1).length;
    
    return num;
  }

  //  public updateStudent() : boolean {}

  public getStudents() : Student[] {
    return this.students;
  }
}

export interface Student {
  firstName : string,
  lastName : string,
  age :  number
}
