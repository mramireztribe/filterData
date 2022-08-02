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

  ngOnInit(): void {
    this.myCharacters = this._characterService.getAllCharacters()
  }

  filterCharacters(e: any) {
    var nameToFilter = e.target.defaultValue
    this.myCharacters = this._characterService.filterCharacters(e, nameToFilter)
    console.log("returned data", this.myCharacters)
  }

}
