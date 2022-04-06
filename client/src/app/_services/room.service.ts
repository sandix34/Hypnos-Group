import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../shared/interfaces/room.interface';
const baseUrl = '/api/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  createRoom(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

}

