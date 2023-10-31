import { Component, Input } from '@angular/core';
import { Character } from 'src/app/shared/types.s';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

  displayedColumns: string[] = ['name', 'age', 'gender', 'status'];

  // recursoso de la lista de personajes
  characters$: Observable<Character[]>

  constructor(private dataService: DataService){
    this.characters$ = this.dataService.getCharacters$()
  }
}
