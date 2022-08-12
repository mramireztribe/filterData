import { Component, OnInit } from '@angular/core';
import { SimpsonCharacterService } from '../../dataServices/simpson-character.service'

@Component({
  selector: 'app-filter-data',
  templateUrl: './filter-data.component.html',
  styleUrls: ['./filter-data.component.scss']
})
export class FilterDataComponent implements OnInit {

  constructor(private _characterService: SimpsonCharacterService) { }

  myCharacters: any = []
  topMenuCharacters: any = []
  displayedCharacters: any = []

  ngOnInit(): void {

    //SET COMPONENT VARIABLES = DataServiceCalls()
    this.topMenuCharacters = this._characterService.getAllCharacters();
    this.myCharacters = this._characterService.getAllCharacters()
    this.displayedCharacters = this._characterService.getAllCharacters()
    console.clear()
  }

  /* The filterCharacter() function Below gets called from the HTML page on the (change) event....it filters the data
     based off which "checkbox" the user clicked
  */
  filterCharacters(e: any, incomingCharacter: any) {
    console.clear()
    console.log("filterCharacters(e:any)", e)
    var nameToFilter = e.target.defaultValue
    console.log("filtering by: ", nameToFilter)
    this.myCharacters = this._characterService.filterCharacters(e, nameToFilter, this.myCharacters, incomingCharacter)
    console.log("this.myCharacters", this.myCharacters)
    this.displayedCharacters = this._characterService.filterCharacters(e, nameToFilter, this.myCharacters, incomingCharacter);
    this.displayedCharacters = this.myCharacters;
  }

  clickSortFunction(tmc: any) {
    var sortedData = this._characterService.sortData(tmc)
  }
}
