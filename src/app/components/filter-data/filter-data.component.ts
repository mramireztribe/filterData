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

  ngOnInit(): void {

    //SET COMPONENT VARIABLES = DataServiceCalls()
    this.topMenuCharacters = this._characterService.getAllCharacters();
    this.myCharacters = this._characterService.getAllCharacters()
  }

  /* The filterCharacter() function Below gets called from the HTML page on the (change) event....it filters the data
     based off which "checkbox" the user clicked
  */
  filterCharacters(e: any) {
    var nameToFilter = e.target.defaultValue
    this.myCharacters = this._characterService.filterCharacters(e, nameToFilter)
  }

}
