import { Injectable } from '@angular/core';
import { Character, ObservableUserType, User } from '../shared/types.s';
import { Observable, of } from 'rxjs';
import list from '../shared/rick&morty'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  URL = 'https://random-data-api.com/api/v2/users'
  characters = list

  constructor() { }

  // devuelve un Observable de tipo ObservableUserType 
  // ObservableUserType es un objeto con el usuario traido de la API y un array donde se almacenan los datos que han sido traidos'
  getDataCard$(): Observable<ObservableUserType> {

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

  getCharacters$():Observable<Character[]>{
    return of(this.characters);
  }

}
