import { Student } from './../Interface/student.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const ApiStudent = 'http://localhost:3000/students';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {


  constructor(private http: HttpClient) { }

  findAll(): Observable<Student[]> {
    return this.http.get<Student[]>(ApiStudent);
  }

  findById(id: number): Observable<Student[]> {
    return this.http.get<Student[]>(ApiStudent + '/' + id);
  }

}
