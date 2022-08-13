import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
// import { ICharacter } from '../dataModels/simpson-character/simpson-character.module'

@Injectable({
  providedIn: 'root'
})
export class SimpsonCharacterService {

  constructor() { }


  characters: any = [
    {
      orderId: 4,
      name: "Homer"
    },
    {
      orderId: 1,
      name: "Marge"
    },
    {
      orderId: 3,
      name: "Bart"
    },
    {
      orderId: 2,
      name: "Lisa"
    },
    {
      orderId: 0,
      name: "Maggie"
    },
    {
      orderId: 0,
      name: "Maggie"
    }
  ]

  splitCharacterFamilies: any = {
    families: [
      {
        simpsons: [
          {
            orderId: 4,
            name: "Homer"
          },
          {
            orderId: 1,
            name: "Marge"
          },
          {
            orderId: 3,
            name: "Bart"
          },
          {
            orderId: 2,
            name: "Lisa"
          },
          {
            orderId: 0,
            name: "Maggie"
          },
          {
            orderId: 0,
            name: "Maggie"
          }
        ]
      },
      {
        flanders: [
          {
            orderId: 0,
            name: "Ned"
          },
          {
            orderId: 1,
            name: "Maude"
          },
          {
            orderId: 2,
            name: "Rod"
          },
          {
            orderId: 3,
            name: "Todd"
          },
          // BELOW LINE: just to test if homer is different. 
          {
            orderId: 4,
            name: "Homer"
          },
        ]
      }
    ],
  };


  filteredCharacters: any = [];
  filteredCharacters2: any = [];
  x: any


  getAllCharacters(): any {
    return this.characters
  }

  getTwoFamilies(): any {
    return this.splitCharacterFamilies;
  }

  getEmptyCharacter(): any {
    return {
      orderId: 555,
      name: ""
    }
  }

  filterCharacters(e: any, filteredCharacterName: any, myCharacters: any, incomingCharacter: any) {
    // console.log("DS: e", e)
    // console.log("DS: filteredCharacterName", filteredCharacterName)
    // console.log("DS: myCharacters", myCharacters)
    console.log("incomingCharacter", incomingCharacter)
    this.filteredCharacters2 = myCharacters.filter((d: any) => d != incomingCharacter)
    var isChecked = e.target.checked // Used on the line below: if(isChecked)

    if (isChecked == true) {
      return this.filteredCharacters2 // return Filtered Data.....returns it to Component
    }
    else {
      var itemToReAdd: any;
      console.log("filteredCharacterName", filteredCharacterName)
      this.filteredCharacters2.push(incomingCharacter) // Add to the Filtered Data
      return this.filteredCharacters2; // Sends back to Component. 
    }
  }

  sortData(tmc: any): any {
    var sortByData = tmc.sort((a: any, b: any) => a.orderId - b.orderId);
    return sortByData;
  }

  loSort() {

  }


}
