import { Injectable } from '@angular/core';
// import { ICharacter } from '../dataModels/simpson-character/simpson-character.module'

@Injectable({
  providedIn: 'root'
})
export class SimpsonCharacterService {

  constructor() { }

  characters: any = ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie']
  filteredCharacters: any = [];
  filteredCharacters2: any = [];
  x: any


  getAllCharacters(): any {
    return this.characters
  }

  filterCharacters(e: any, filteredCharacterName: any, myCharacters: any) {
    this.filteredCharacters2 = myCharacters.filter((d: any) => d != filteredCharacterName)
    var isChecked = e.target.checked // Used on the line below: if(isChecked)

    if (isChecked == true) {
      return this.filteredCharacters2 // return Filtered Data.....returns it to Component
    }
    else {
      var itemToReAdd: any;
      this.filteredCharacters2.push(filteredCharacterName) // Add to the Filtered Data
      return this.filteredCharacters2; // Sends back to Component. 
    }
  }

}
