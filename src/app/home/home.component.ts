import { Component, OnDestroy, Output } from '@angular/core';
import { DataService } from './data.service';
import { Observable, Subscription } from 'rxjs';
import { Character, User } from '../shared/types.s';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
    // recursos de las cards
    subsList:any[]=[]
    dataSubscription: Subscription
    subsState = true
    data:User={} as User

    

    constructor(private dataService: DataService) {

        this.dataSubscription = this.dataService.getDataCard$().subscribe({
            next: (value) => {
                if(value.user){
                    this.data = value.user
                    this.subsList = value.showedCardList
                }
            },
            complete: (() => {
                this.userUnsubscriber()
            })
        })

    }

    ngOnDestroy(): void {
        this.dataSubscription.unsubscribe()
    }

    // unsubscribe del observer del user y cambia el estado de variable switch
    userUnsubscriber(){
        this.dataSubscription.unsubscribe()
        this.subsState = false
    }


}
