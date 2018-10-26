import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  getItems(): Observable<object[]> {
    return of([
      {
        id: 1,
        name: "Test 1",
        location: "Jacobus",
        description: "A simple thing",
      },
      {
        id: 2,
        name: "Test 2",
        location: "In Transit",
        description: "Another simple thing",
      },
    ])
  }
}
