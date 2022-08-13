import { Component, OnInit } from '@angular/core';
import { SimpsonCharacterService } from 'src/app/dataServices/simpson-character.service';
import * as _ from 'lodash';
import { size } from 'lodash';

@Component({
  selector: 'app-lodash-customized-filters',
  templateUrl: './lodash-customized-filters.component.html',
  styleUrls: ['./lodash-customized-filters.component.scss']
})
export class LodashCustomizedFiltersComponent implements OnInit {

  defaultFilter: any;
  chunkFilter: any;
  compactFilter: any;
  concatFilter: any;

  constructor(private _characterDataservice: SimpsonCharacterService) { }

  ngOnInit(): void {
    var data = this._characterDataservice.getAllCharacters();
    this.defaultFilter = _.defaults(data); console.log("defaultFilter", this.defaultFilter);

    // BELOW WORKS!!!! just cant loop through it the same way......because it chunks out multiple objects, still in order
    this.chunkFilter = _.chunk(data, 1); console.log("chunkFilter", this.chunkFilter);
    this.compactFilter = _.compact(data); console.log("compactFilter", this.compactFilter);
    this.concatFilter = _.concat(data, { name: "Sideshow Bob", orderId: 555 }); console.log("concatFilter", this.concatFilter);

    // var filteredData = _.uniq(data);
    console.log("this is the data", data);
  }

}
