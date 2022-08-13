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
  differenceFilter: any;
  dropFilter: any;
  dropRightFilter: any;
  dropWhileFilter: any;
  fillFilter: any;

  constructor(private _characterDataservice: SimpsonCharacterService) { }

  ngOnInit(): void {
    var data = this._characterDataservice.getAllCharacters();
    var twoFamiliesData = this._characterDataservice.getTwoFamilies(); console.log("two families", twoFamiliesData);

    this.defaultFilter = _.defaults(data); console.log("defaultFilter", this.defaultFilter);
    // FIRST line below this comment (_.chunk) WORKS!!!! just cant loop through it the same way......because it chunks out multiple objects, still in order
    this.chunkFilter = _.chunk(data, 1); console.log("chunkFilter", this.chunkFilter);
    this.compactFilter = _.compact(data); console.log("compactFilter", this.compactFilter);
    this.concatFilter = _.concat(data, { name: "Sideshow Bob", orderId: 555 }); console.log("concatFilter", this.concatFilter);
    this.differenceFilter = _.difference(twoFamiliesData.families, twoFamiliesData[0], twoFamiliesData[1]); console.log("differenceFilter", this.differenceFilter);
    this.dropFilter = _.drop(data, 3); console.log("dropFilter", this.dropFilter)
    this.dropRightFilter = _.dropRight(data, 2); console.log("dropRightFilter", this.dropRightFilter)
    this.dropWhileFilter = _.dropWhile(data, ['gender', 'Male']); console.log("dropWhileFilter", this.dropWhileFilter)
    this.fillFilter = _.fill(data, { orderId: 0, name: "Maggie", gender: "Female" }); console.log("fill Filter", this.fillFilter)
  }
}
