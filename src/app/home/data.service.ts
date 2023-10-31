import { Injectable } from '@angular/core';
import { ObservableUserType, User } from '../shared/types.s';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  URL = 'https://random-data-api.com/api/v2/users'

  constructor() { }

  //
  getDataCard(): Observable<ObservableUserType> {

    let counter = 0
    let data:User|null
    let listSubs : any[] =[]

    return new Observable((subscriber) => {
      setInterval(async () => {
        if (counter >= 5) {
          subscriber.complete()
        } else {
          data = await this.getUser()
          if (data) {
            counter++
            listSubs.push({ count: counter, card: data.username })
            subscriber.next({user:data, showedCardList:listSubs})
          } else {
            console.log('data null')
          }
        }
      }, 3500)
    })
  }

  // me trae usuarios random de una API
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
