import { Component, OnInit } from '@angular/core';
import { SimpsonCharacterService } from 'src/app/dataServices/simpson-character.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-lodash-customized-filters',
  templateUrl: './lodash-customized-filters.component.html',
  styleUrls: ['./lodash-customized-filters.component.scss']
})
export class LodashCustomizedFiltersComponent implements OnInit {

  defaultFilter: any;

  constructor(private _characterDataservice: SimpsonCharacterService) { }

  ngOnInit(): void {
    var data = this._characterDataservice.getAllCharacters();
    this.defaultFilter = _.defaults(data)
    // var filteredData = _.uniq(data);
    console.log("this is the data", data)
  }

}
