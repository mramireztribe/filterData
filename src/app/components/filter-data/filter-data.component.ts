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
  filterCharacters(e: any) {
    console.clear()
    console.warn("new data")
    var nameToFilter = e.target.defaultValue
    this.myCharacters = this._characterService.filterCharacters(e, nameToFilter, this.myCharacters)
    this.displayedCharacters = this._characterService.filterCharacters(e, nameToFilter, this.myCharacters);
    console.log("this.displayCharacters BEFORE calling the DS", this.displayedCharacters)
    this.displayedCharacters = this.myCharacters;
    console.log("this.displayCharacters AFTER calling the DS", this.displayedCharacters)
    console.log("this.myCharacters", this.myCharacters)
  }

}
