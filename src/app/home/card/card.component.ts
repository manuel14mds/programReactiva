import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  user = { "id": 9517, "password": "gA7ym9uHOe", "first_name": "", "last_name": "Oberbrunner", "username": "loading", "email": "xenia.oberbrunner@email.com", "avatar": "https://media.tenor.com/FBeNVFjn-EkAAAAC/ben-redblock-loading.gif", "gender": "Non-binary", "phone_number": "+213 579.775.6144 x422", "social_insurance_number": "354342230", "employment": { "title": "Central Marketing Planner", "key_skill": "Communication" }, "address": { "city": "Waylonburgh", "street_name": "Bergnaum Circle", "street_address": "1631 Volkman Village", "zip_code": "59926-6785", "state": "New York", "country": "United States" }, "credit_card": { "cc_number": "6771-8960-4934-9165" }, "subscription": { "plan": "Gold", "status": "Idle", "payment_method": "Credit card", "term": "Full subscription" } };

  @Input()
  dataSource = this.user
}
