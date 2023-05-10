import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllDataService {

  constructor() { }
  getAllData() {
    return {
      username: "Vinayak"
    }
  }
}
