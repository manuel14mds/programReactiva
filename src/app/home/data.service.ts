import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../shared/types.s';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnDestroy{
  URL = 'https://random-data-api.com/api/v2/users'
  
  constructor() { }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  async getUser(): Promise<User | null> {
    try {
      const response = await fetch(this.URL);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        return null
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }


  
}
