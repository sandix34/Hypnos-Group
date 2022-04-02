import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../shared/interfaces/hotel.interface';
const baseUrl = '/api/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }

  createHotel(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  getAllHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
