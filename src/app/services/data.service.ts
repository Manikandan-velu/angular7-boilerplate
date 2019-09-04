import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Horse } from './../model/model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public apiUrl: string = 'http://dev.api.staller.show/v1/';

  constructor(private http: HttpClient) { }

  // Get Horses List
  getHorseList() {
    return this.http.get<Horse[]>(this.apiUrl + 'horses');
  }

  // Get Horse Detail
  getHorse(id: number) {
    return this.http.get<Horse[]>(this.apiUrl + 'horses/' + id);
  }

  // Delete Horse
  deleteHorse(id: number) {
    return this.http.delete(this.apiUrl + 'horses/' + id);
  }

  // Create Horse
  addHorse(horse: object) {
    let data = horse;
    return this.http.post(this.apiUrl + 'horses', data);
  }

  // Update Horse
  updateHorse(horse: object, id: number) {
    let data = horse;
    return this.http.put(this.apiUrl + 'horses/' + id, data);
  }

}