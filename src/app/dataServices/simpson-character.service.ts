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

  filterCharacters(e: any, filteredCharacterName: any) {
    console.log('what is e manny', e)
    console.log('manny do you want a hotdog', filteredCharacterName)
    var tempData: any = []

    this.filteredCharacters2 = this.characters.filter((d: any) => d != filteredCharacterName)
    this.x = this.filteredCharacters2;
    console.log('manny does not want a hotdog', this.x)

    return this.x

    var isChecked = e.target.checked
    console.log('isChecked', e)
    if (isChecked == true) {
      console.log("TRUE BLUE")
      return this.filteredCharacters
    }
    else {
      console.log("FALSE-A-ROO")
      return this.characters

    }
    // return this.filteredCharacters

  }

}
