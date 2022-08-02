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
    console.log("myCharactersFoo", myCharacters)
    this.filteredCharacters2 = myCharacters.filter((d: any) => d != filteredCharacterName)

    console.log("you will be returning this.filteredCharacters]2", this.filteredCharacters2)
    return this.filteredCharacters2

    console.log('what is e manny', e)
    console.log("defaultValue", e.target.defaultValue)
    console.log('manny do you want a hotdog', filteredCharacterName)
    var tempData: any = []

    this.filteredCharacters2 = this.characters.filter((d: any) => d != filteredCharacterName)

    // return this.x

    var isChecked = e.target.checked
    console.log('isChecked', e)
    if (isChecked == true) {
      console.log("TRUE BLUE", this.filteredCharacters2)
      return this.filteredCharacters2
    }
    else {
      console.log("FALSE-A-ROO")
      return this.characters
    }
    // return this.filteredCharacters

  }

}
