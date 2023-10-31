import { Component, OnDestroy, Output } from '@angular/core';
import { DataService } from './data.service';
import { Observable, Subscription } from 'rxjs';
import { User } from '../shared/types.s';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
    subsList: any[] = []
    dataSubscription: Subscription
    switchSubscribe = true

    data: any

    constructor(private dataService: DataService) {

        this.dataSubscription = this.getDataCard().subscribe({
            next: (value) => {
                this.data = value
            },
            complete: (() => {
                this.switchSubscribe = false
                this.dataSubscription.unsubscribe()
            })
        })

    }

    ngOnDestroy(): void {
        this.dataSubscription.unsubscribe()
    }

    getDataCard(): Observable<User> {
        
        let counter = 0
        let dataCard

        return new Observable((subscriber) => {
            setInterval(async () => {
                if (counter >= 3) {
                    subscriber.complete()
                } else {
                    dataCard = await this.dataService.getUser()
                    if (dataCard) {
                        counter++
                        this.subsList = [...this.subsList, { count: counter, card: dataCard?.username }]
                        subscriber.next(dataCard)
                    } else {
                        console.log('data null')
                    }
                }
            }, 3000)

        })
    }

}
