import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private databaseURL ="https://foodshopfjd-default-rtdb.europe-west1.firebasedatabase.app/Termekek.json"

  constructor(private http:HttpClient) { }

  getFoods() {
    return this.http.get(this.databaseURL)
  }
}
