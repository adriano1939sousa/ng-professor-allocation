import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Allocation } from 'src/app/models/allocations/allocation';

const baseUrl = 'http://localhost:8080/allocations';


@Injectable({
  providedIn: 'root'
})
export class AllocationService {


  constructor(private http: HttpClient) { }

  getAll(): Observable<Allocation[]> {
    return this.http.get<Allocation[]>(baseUrl);
  }

  get(id: any): Observable<Allocation> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  findByProfessorId(id: any): Observable<Allocation[]> {
    return this.http.get<Allocation[]>(`${baseUrl}/professor/${id}`);
  }

  findByCourseId(id: any): Observable<Allocation[]> {
    return this.http.get<Allocation[]>(`${baseUrl}/course/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  
}
