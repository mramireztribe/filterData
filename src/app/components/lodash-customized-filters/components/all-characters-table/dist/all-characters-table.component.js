"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AllCharactersTableComponent = void 0;
var core_1 = require("@angular/core");
var AllCharactersTableComponent = /** @class */ (function () {
    function AllCharactersTableComponent() {
        this.isTableShown = false;
        this.selectedCell = false;
        this.styledCell = "";
    }
    AllCharactersTableComponent.prototype.ngOnInit = function () {
    };
    AllCharactersTableComponent.prototype.showData = function () {
        this.isTableShown = !this.isTableShown;
    };
    AllCharactersTableComponent.prototype.tableCellClicked = function (e, i) {
        // gets clicked cell by row + cellIndex
        this.cellIndex = e.srcElement.cellIndex;
        this.rowIndex = i;
        this.styledCell = "active";
        this.selectedCell = true;
    };
    AllCharactersTableComponent.prototype.styleSelectedCell = function (i) {
        if (this.selectedCell && this.rowIndex == i) {
            return "active";
        }
        else {
            return "";
        }
    };
    AllCharactersTableComponent.prototype.sortByOrderId = function () {
        console.log("allCharacters", this.allCharacters);
        var sortedData = this.allCharacters.sort(function (a, b) { return (a.orderId > b.orderId) ? 1 : -1; });
        console.log("sortedData", sortedData);
    };
    AllCharactersTableComponent.prototype.sortByName = function () {
        console.log("allCharacters", this.allCharacters);
        var sortedData = this.allCharacters.sort(function (a, b) { return (a.name > b.name) ? 1 : -1; });
        console.log("sortedData", sortedData);
    };
    AllCharactersTableComponent.prototype.sortByGender = function () {
        console.log("allCharacters", this.allCharacters);
        var sortedData = this.allCharacters.sort(function (a, b) { return (a.gender > b.gender) ? 1 : -1; });
        console.log("sortedData", sortedData);
    };
    __decorate([
        core_1.Input()
    ], AllCharactersTableComponent.prototype, "allCharacters");
    AllCharactersTableComponent = __decorate([
        core_1.Component({
            selector: 'app-all-characters-table',
            templateUrl: './all-characters-table.component.html',
            styleUrls: ['./all-characters-table.component.scss']
        })
    ], AllCharactersTableComponent);
    return AllCharactersTableComponent;
}());
exports.AllCharactersTableComponent = AllCharactersTableComponent;
