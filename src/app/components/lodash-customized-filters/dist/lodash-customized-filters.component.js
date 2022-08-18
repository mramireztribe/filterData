"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LodashCustomizedFiltersComponent = void 0;
var core_1 = require("@angular/core");
var _ = require("lodash");
var LodashCustomizedFiltersComponent = /** @class */ (function () {
    function LodashCustomizedFiltersComponent(_characterDataservice) {
        this._characterDataservice = _characterDataservice;
    }
    LodashCustomizedFiltersComponent.prototype.ngOnInit = function () {
        // For top tables
        this.allCharacters = this._characterDataservice.getAllCharacters();
        this.basicCharacters = this._characterDataservice.getAllBasicCharacters();
        console.log("basic characters", this.basicCharacters);
        var simpsonFamilyCharacters = this._characterDataservice.getAllCharacters();
        var twoFamiliesData = this._characterDataservice.getTwoFamilies();
        console.log("two families", twoFamiliesData);
        var allCharacters = this._characterDataservice.getAllCharacters();
        var basicTwoFamilyCharacters = this._characterDataservice.getBasicTwoFamilyData();
        this.basicTwoFamilyCharacters = basicTwoFamilyCharacters;
        var basicCharacters = this._characterDataservice.getAllBasicCharacters();
        var numberedList = this._characterDataservice.getNumberedList();
        console.log("tester for new variables", basicTwoFamilyCharacters);
        this.defaultFilter = _.defaults(simpsonFamilyCharacters);
        console.log("_.defaults(simpsonFamilyCharacters)", this.defaultFilter);
        // FIRST line below this comment (_.chunk) WORKS!!!! just cant loop through it the same way......because it chunks out multiple objects, still in order
        this.chunkFilter = _.chunk(simpsonFamilyCharacters, 1);
        console.log("_.chunk(simpsonFamilyCharacters, 1)", this.chunkFilter);
        this.compactFilter = _.compact(simpsonFamilyCharacters);
        console.log("_.compact(simpsonFamilyCharacters", this.compactFilter);
        this.concatFilter = _.concat(simpsonFamilyCharacters, { name: "Sideshow Bob", orderId: 555 });
        console.log("_.concat(simpsonFamilyCharacters", this.concatFilter);
        this.differenceFilter = _.difference(twoFamiliesData.families, twoFamiliesData[0], twoFamiliesData[1]);
        console.log(" _.difference(twoFamiliesData.families", this.differenceFilter);
        this.dropFilter = _.drop(simpsonFamilyCharacters, 3);
        console.log("_.drop(simpsonFamilyCharacters, 3)", this.dropFilter);
        this.dropRightFilter = _.dropRight(simpsonFamilyCharacters, 2);
        console.log("_.dropRight(simpsonFamilyCharacters, 2)", this.dropRightFilter);
        this.dropWhileFilter = _.dropWhile(simpsonFamilyCharacters, ['gender', 'Male']);
        console.log("_.dropWhile(simpsonFamilyCharacters, ['gender', 'Male'])", this.dropWhileFilter);
        // this.fillFilter = _.fill(simpsonFamilyCharacters, { orderId: 0, name: "Maggie", gender: "Female" }); console.log("fill Filter", this.fillFilter);
        this.findIndexFilter = _.findIndex(simpsonFamilyCharacters, { orderId: 3, name: "Bart", gender: "Male" });
        console.log("_.findIndex(simpsonFamilyCharacters, { orderId: 3, name: 'Bart', gender: 'Male' })", this.findIndexFilter);
        this.headFilter = _.head(simpsonFamilyCharacters);
        console.log("_.head(simpsonFamilyCharacters)", this.headFilter);
        this.indexOfFilter = _.indexOf(allCharacters, { orderId: 3, name: "Bart", gender: "Male" });
        console.log(" _.indexOf(allCharacters)", this.indexOfFilter);
        this.initialFilter = _.initial(allCharacters);
        console.log(" _.initial(allCharacters)", this.initialFilter);
        this.intersectionFilter = _.intersection(basicTwoFamilyCharacters[0], basicTwoFamilyCharacters[1]);
        console.log(" _.intersection(allCharacters, twoFamiliesData)", this.intersectionFilter);
        // this.joinFilter = _.join(this.basicCharacters, " is a Simpson! "); console.log("_join(this.basicCharacters)", this.joinFilter)
        this.lastFilter = _.last(allCharacters);
        console.log("_last(allCharacters)", this.lastFilter);
        this.lastIndexOfFilter = _.lastIndexOf([1, 2, 1, 2], 2);
        console.log("_lastIndexOf([1,2,1,2],2)", this.lastIndexOfFilter);
        this.lastIndexOfFilter = _.lastIndexOf([1, 2, 1, 2], 1);
        console.log("_lastIndexOf([1,2,1,2],1)", this.lastIndexOfFilter);
        // this.lastIndexOfFilter = _.lastIndexOf(this.basicCharacters, 'Bart'); console.log("_lastIndexOf(this.basicCharacters)", this.lastIndexOfFilter)
        this.nthFilter = _.nth(this.allCharacters, 5);
        console.log("_nth(this.nthFilter)", this.nthFilter);
        console.log("_nth(this.allCharacters)", this.allCharacters);
        // this.pullFilter = _.pull(this.basicCharacters, "Bart"); console.log("_pull...TRY TO GET WORKING AT THE OBJECT LEVEL", this.pullFilter);
        // this.pullAllFilter = _.pullAll(this.basicCharacters, ['Bart', 'Lisa']); console.log("_pullAll('Bart', 'Lisa')", this.pullAllFilter);
        console.log("evens BEFORE", this.basicCharacters);
        // this.basicCharacters = this._characterDataservice.basicCharacters;
        console.log("originalBasicCharacters", basicCharacters);
        var evens = _.remove(basicCharacters, function (n) {
            var test = n % 2 == 0;
        });
        console.log("BEFORE ._reverse(this.basicCharacters", this.basicCharacters);
        this.reverseFilter = _.reverse(this.basicCharacters);
        console.log("_reverse(this.basicCharacters)", this.basicCharacters);
        console.log("this.basiCharacters", this.basicCharacters.length);
        this.sliceFilter = _.slice(this.basicCharacters, 0, this.basicCharacters.length);
        console.log("NOT WORKING: _slicke(this.basicCharacters,0,this.basicCharacters)", this.basicCharacters);
        this.sortedIndex = _.sortedIndex(this.numberedList, 7);
        console.log("NOT WORKING: this.sortedIndex", this.sortedIndex);
    };
    LodashCustomizedFiltersComponent.prototype.newFunctionToDo = function (e) {
        console.log("event", e);
    };
    LodashCustomizedFiltersComponent = __decorate([
        core_1.Component({
            selector: 'app-lodash-customized-filters',
            templateUrl: './lodash-customized-filters.component.html',
            styleUrls: ['./lodash-customized-filters.component.scss']
        })
    ], LodashCustomizedFiltersComponent);
    return LodashCustomizedFiltersComponent;
}());
exports.LodashCustomizedFiltersComponent = LodashCustomizedFiltersComponent;
