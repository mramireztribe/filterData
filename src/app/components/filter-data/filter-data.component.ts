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
    // console.log("in Component....about to call DS filterCharacters(e)")
    this.myCharacters = this._characterService.filterCharacters(e)
    console.log("returned data", this.myCharacters)
  }

}
