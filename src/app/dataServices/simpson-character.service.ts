import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
// import { ICharacter } from '../dataModels/simpson-character/simpson-character.module'

@Injectable({
  providedIn: 'root'
})
export class SimpsonCharacterService {

  constructor() { }

  basicCharacters: any = ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie']
  superBasiCharacters: any = [1, 2, 3, 4, 5]

  characters: any = [
    {
      orderId: 6,
      name: "Snowball",
      gender: ""
    },
    {
      orderId: 7,
      name: "Jimbo",
      gender: "Male"
    },
    {
      orderId: 4,
      name: "Homer",
      gender: "Male"
    },
    {
      orderId: 1,
      name: "Marge",
      gender: "Female"
    },
    {
      orderId: 3,
      name: "Bart",
      gender: "Male"
    },
    {
      orderId: 2,
      name: "Lisa",
      gender: "Female"
    },
    {
      orderId: 0,
      name: "Maggie",
      gender: "Female"
    },
    {
      orderId: 0,
      name: "Maggie",
      gender: "Female"
    }, // Used for dupicates
    {
      orderId: 5,
      name: "Santas Little Helper",
      gender: null
    },
  ]

  splitCharacterFamilies: any = {
    families: [
      {
        simpsons: [
          {
            orderId: 4,
            name: "Homer",
            gender: "Male"
          },
          {
            orderId: 1,
            name: "Marge",
            gender: "Female"
          },
          {
            orderId: 3,
            name: "Bart",
            gender: "Male"
          },
          {
            orderId: 2,
            name: "Lisa",
            gender: "Female"
          },
          {
            orderId: 0,
            name: "Maggie",
            gender: "Female"
          },
          {
            orderId: 0,
            name: "Maggie",
            gender: "Female"
          }
        ]
      },
      {
        flanders: [
          {
            orderId: 0,
            name: "Ned",
            gender: "Male"
          },
          {
            orderId: 1,
            name: "Maude",
            gender: "Female"
          },
          {
            orderId: 2,
            name: "Rod",
            gender: "Male"
          },
          {
            orderId: 3,
            name: "Todd",
            gender: "Male"
          },
          // BELOW LINE: just to test if homer is different. 
          {
            orderId: 4,
            name: "Homer",
            gender: "Male"
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

  getAllBasicCharacters(): any {
    return this.basicCharacters;
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
