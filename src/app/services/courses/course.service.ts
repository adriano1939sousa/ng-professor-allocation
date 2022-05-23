import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Course } from 'src/app/models/courses/course';

const baseUrl = 'http://localhost:8080/courses';


@Injectable({
  providedIn: 'root'
})
export class CouseService {


  constructor(private http: HttpClient) { }

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>(baseUrl);
  }

  get(id: any): Observable<Course> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  
  
}
