import { Component, OnInit } from '@angular/core';
import { SimpsonCharacterService } from 'src/app/dataServices/simpson-character.service';
import * as _ from 'lodash';
import { size } from 'lodash';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-lodash-customized-filters',
  templateUrl: './lodash-customized-filters.component.html',
  styleUrls: ['./lodash-customized-filters.component.scss']
})
export class LodashCustomizedFiltersComponent implements OnInit {

  allCharacters: any;
  basicTwoFamilyCharacters: any;
  basicCharacters: any;

  defaultFilter: any;
  chunkFilter: any;
  compactFilter: any;
  concatFilter: any;
  differenceFilter: any;
  dropFilter: any;
  dropRightFilter: any;
  dropWhileFilter: any;
  fillFilter: any;
  findIndexFilter: any;
  headFilter: any;
  indexOfFilter: any;
  initialFilter: any;
  intersectionFilter: any;
  joinFilter: any;
  lastFilter: any;
  lastIndexOfFilter: any;
  nthFilter: any;
  pullFilter: any;
  pullAllFilter: any;
  removeFilter: any;

  constructor(private _characterDataservice: SimpsonCharacterService) { }

  ngOnInit(): void {
    // For top tables
    this.allCharacters = this._characterDataservice.getAllCharacters();
    this.basicCharacters = this._characterDataservice.getAllBasicCharacters(); console.log("basic characters", this.basicCharacters);


    var simpsonFamilyCharacters = this._characterDataservice.getAllCharacters();
    var twoFamiliesData = this._characterDataservice.getTwoFamilies(); console.log("two families", twoFamiliesData);
    var allCharacters = this._characterDataservice.getAllCharacters();
    var basicTwoFamilyCharacters = this._characterDataservice.getBasicTwoFamilyData(); this.basicTwoFamilyCharacters = basicTwoFamilyCharacters;
    var basicCharacters = this._characterDataservice.getAllBasicCharacters();
    console.log("tester for new variables", basicTwoFamilyCharacters);

    this.defaultFilter = _.defaults(simpsonFamilyCharacters); console.log("_.defaults(simpsonFamilyCharacters)", this.defaultFilter);
    // FIRST line below this comment (_.chunk) WORKS!!!! just cant loop through it the same way......because it chunks out multiple objects, still in order
    this.chunkFilter = _.chunk(simpsonFamilyCharacters, 1); console.log("_.chunk(simpsonFamilyCharacters, 1)", this.chunkFilter);
    this.compactFilter = _.compact(simpsonFamilyCharacters); console.log("_.compact(simpsonFamilyCharacters", this.compactFilter);
    this.concatFilter = _.concat(simpsonFamilyCharacters, { name: "Sideshow Bob", orderId: 555 }); console.log("_.concat(simpsonFamilyCharacters", this.concatFilter);
    this.differenceFilter = _.difference(twoFamiliesData.families, twoFamiliesData[0], twoFamiliesData[1]); console.log(" _.difference(twoFamiliesData.families", this.differenceFilter);
    this.dropFilter = _.drop(simpsonFamilyCharacters, 3); console.log("_.drop(simpsonFamilyCharacters, 3)", this.dropFilter);
    this.dropRightFilter = _.dropRight(simpsonFamilyCharacters, 2); console.log("_.dropRight(simpsonFamilyCharacters, 2)", this.dropRightFilter)
    this.dropWhileFilter = _.dropWhile(simpsonFamilyCharacters, ['gender', 'Male']); console.log("_.dropWhile(simpsonFamilyCharacters, ['gender', 'Male'])", this.dropWhileFilter);
    // this.fillFilter = _.fill(simpsonFamilyCharacters, { orderId: 0, name: "Maggie", gender: "Female" }); console.log("fill Filter", this.fillFilter);
    this.findIndexFilter = _.findIndex(simpsonFamilyCharacters, { orderId: 3, name: "Bart", gender: "Male" }); console.log("_.findIndex(simpsonFamilyCharacters, { orderId: 3, name: 'Bart', gender: 'Male' })", this.findIndexFilter);
    this.headFilter = _.head(simpsonFamilyCharacters); console.log("_.head(simpsonFamilyCharacters)", this.headFilter);
    this.indexOfFilter = _.indexOf(allCharacters, { orderId: 3, name: "Bart", gender: "Male" }); console.log(" _.indexOf(allCharacters)", this.indexOfFilter);
    this.initialFilter = _.initial(allCharacters); console.log(" _.initial(allCharacters)", this.initialFilter);
    this.intersectionFilter = _.intersection(basicTwoFamilyCharacters[0], basicTwoFamilyCharacters[1]); console.log(" _.intersection(allCharacters, twoFamiliesData)", this.intersectionFilter);
    // this.joinFilter = _.join(this.basicCharacters, " is a Simpson! "); console.log("_join(this.basicCharacters)", this.joinFilter)
    this.lastFilter = _.last(allCharacters); console.log("_last(allCharacters)", this.lastFilter)
    this.lastIndexOfFilter = _.lastIndexOf([1, 2, 1, 2], 2); console.log("_lastIndexOf([1,2,1,2],2)", this.lastIndexOfFilter)
    this.lastIndexOfFilter = _.lastIndexOf([1, 2, 1, 2], 1); console.log("_lastIndexOf([1,2,1,2],1)", this.lastIndexOfFilter)
    // this.lastIndexOfFilter = _.lastIndexOf(this.basicCharacters, 'Bart'); console.log("_lastIndexOf(this.basicCharacters)", this.lastIndexOfFilter)
    this.nthFilter = _.nth(this.allCharacters, 5); console.log("_nth(this.nthFilter)", this.nthFilter); console.log("_nth(this.allCharacters)", this.allCharacters);
    // this.pullFilter = _.pull(this.basicCharacters, "Bart"); console.log("_pull...TRY TO GET WORKING AT THE OBJECT LEVEL", this.pullFilter);
    // this.pullAllFilter = _.pullAll(this.basicCharacters, ['Bart', 'Lisa']); console.log("_pullAll('Bart', 'Lisa')", this.pullAllFilter);
    console.log("evens BEFORE", this.basicCharacters);
    // this.basicCharacters = this._characterDataservice.basicCharacters;
    console.log("originalBasicCharacters", basicCharacters);
    var evens: any = _.remove(basicCharacters, function (n: any) {
      console.log("n", n);
      var test: any = n % 2 == 0;
      console.log("this is the evens", test)
    });
    console.log("evens BEFORE", evens);
  }

  newFunctionToDo(e: any) {
    console.log("event", e)
  }
}