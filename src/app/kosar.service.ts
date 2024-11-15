import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KosarService {

  private kosar:any=[]
  private kosarSub = new BehaviorSubject([]);
  private databaseURL ="https://foodshopfjd-default-rtdb.europe-west1.firebasedatabase.app/Rendelesek.json"
  
  constructor(private http:HttpClient) { }

  addOrder(name:any, address:any) {
    let body={name:name, address:address, cart:this.kosar}
    this.http.post(this.databaseURL,body).subscribe(
      (res)=>console.log("Siker", res)
    )
    
  }

  getCart() {
    return this.kosarSub
  }

  addFood(food: any, db: any) {
    
    food.db = db;
    delete food.leiras;
    const existingFoodIndex = this.kosar.findIndex((item:any) => item.id === food.id);

    if (existingFoodIndex !== -1) {
      this.kosar[existingFoodIndex].db = db;
    } else {
      
      this.kosar.push(food);
    }
    this.kosarSub.next(this.kosar);
  }

}
