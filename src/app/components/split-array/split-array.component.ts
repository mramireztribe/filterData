import { Component, OnInit } from '@angular/core';
import { SimpsonCharacterService } from '../../dataServices/simpson-character.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-split-array',
  templateUrl: './split-array.component.html',
  styleUrls: ['./split-array.component.scss']
})
export class SplitArrayComponent implements OnInit {

  characters: any = []

  ngOnInit(): void {
    this.characters = this._characterService.getAllCharacters()
    console.log("split data", this.characters)
  }

  constructor(private _characterService: SimpsonCharacterService) { }

  splitCharacters(characters: any) {
    var theSplitedData: any;
  }
}