import { Injectable } from '@angular/core';
// import { ICharacter } from '../dataModels/simpson-character/simpson-character.module'

@Injectable({
  providedIn: 'root'
})
export class SimpsonCharacterService {

  constructor() { }

  characters: any = ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie']
  filteredCharacters: any = [];

  getAllCharacters(): any {
    return this.characters
  }

  filterCharacters(e: any, filteredCharacterName: any) {

    var tempData: any = []
    this.filteredCharacters = this.characters.filter((d: any) => d != filteredCharacterName)

    return this.filteredCharacters

    // var isChecked = e.target.checked

    // if (isChecked == true) {
    //   console.log("TRUE BLUE")
    // }
    // else {
    //   console.log("FALSE-A-ROO")
    // }
  }
}
