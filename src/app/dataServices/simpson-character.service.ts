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
    console.log("in DS filterCharacters()", e.target.value)
  }
}
