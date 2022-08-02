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

    // return this.filteredCharacters2 // This RETURNS the data....and is CORRECT

    var tempData: any = []

    // this.filteredCharacters2 = this.characters.filter((d: any) => d != filteredCharacterName)

    // return this.x

    var isChecked = e.target.checked
    console.log('isChecked', e)
    if (isChecked == true) {
      console.log("TRUE BLUE", this.filteredCharacters2)
      return this.filteredCharacters2
    }
    else {
      console.log("FALSE-A-ROO")
      var itemToReAdd: any;
      console.log("asdfasdfasdfasdfsa", this.filteredCharacters2)
      this.filteredCharacters2.push(filteredCharacterName)
      console.log("with Kenny", this.filteredCharacters2)
      // this.filteredCharacters2.forEach((newD: any) => {
      //   console.log("newD = " + newD)
      //   if (newD == filteredCharacterName) {
      //     console.log("Time to RE....add: " + filteredCharacterName)
      //   }
      //   else {
      //     console.log("You are screwed.......", filteredCharacterName)
      //     this.filteredCharacters2.push(filteredCharacterName)
      //     console.log("You just added: " + filteredCharacterName)
      //   }
      // });
      return this.filteredCharacters2;
    }
    // return this.filteredCharacters

  }

}
