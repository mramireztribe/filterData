import { Injectable } from '@angular/core';
// import { ICharacter } from '../dataModels/simpson-character/simpson-character.module'

@Injectable({
  providedIn: 'root'
})
export class SimpsonCharacterService {

  constructor() { }

  characters: any = ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie']

  getAllCharacters(): any {
    return this.characters
  }

  filterCharacters(e: any) {
    var isChecked = e.target.checked

    if (isChecked == true) {
      console.log("TRUE BLUE")
    }
    else {
      console.log("FALSE-A-ROO")
    }
  }
}
