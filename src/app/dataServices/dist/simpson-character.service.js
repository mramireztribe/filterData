"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SimpsonCharacterService = void 0;
var core_1 = require("@angular/core");
// import { ICharacter } from '../dataModels/simpson-character/simpson-character.module'
var SimpsonCharacterService = /** @class */ (function () {
    function SimpsonCharacterService() {
        this.basicCharacters = ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'];
        this.superBasiCharacters = [1, 2, 3, 4, 5];
        this.characters = [
            {
                orderId: 6,
                name: "Snowball",
                gender: ""
            },
            {
                orderId: 7,
                name: "Jimbo",
                gender: "Male"
            },
            {
                orderId: 4,
                name: "Homer",
                gender: "Male"
            },
            {
                orderId: 1,
                name: "Marge",
                gender: "Female"
            },
            {
                orderId: 3,
                name: "Bart",
                gender: "Male"
            },
            {
                orderId: 2,
                name: "Lisa",
                gender: "Female"
            },
            {
                orderId: 0,
                name: "Maggie",
                gender: "Female"
            },
            {
                orderId: 0,
                name: "Maggie",
                gender: "Female"
            },
            {
                orderId: 5,
                name: "Santas Little Helper",
                gender: null
            },
        ];
        this.splitCharacterFamilies = {
            families: [
                {
                    simpsons: [
                        {
                            orderId: 4,
                            name: "Homer",
                            gender: "Male"
                        },
                        {
                            orderId: 1,
                            name: "Marge",
                            gender: "Female"
                        },
                        {
                            orderId: 3,
                            name: "Bart",
                            gender: "Male"
                        },
                        {
                            orderId: 2,
                            name: "Lisa",
                            gender: "Female"
                        },
                        {
                            orderId: 0,
                            name: "Maggie",
                            gender: "Female"
                        },
                        {
                            orderId: 0,
                            name: "Maggie",
                            gender: "Female"
                        }
                    ]
                },
                {
                    flanders: [
                        {
                            orderId: 0,
                            name: "Ned",
                            gender: "Male"
                        },
                        {
                            orderId: 1,
                            name: "Maude",
                            gender: "Female"
                        },
                        {
                            orderId: 2,
                            name: "Rod",
                            gender: "Male"
                        },
                        {
                            orderId: 3,
                            name: "Todd",
                            gender: "Male"
                        },
                        // BELOW LINE: just to test if homer is different. 
                        {
                            orderId: 4,
                            name: "Homer",
                            gender: "Male"
                        },
                    ]
                }
            ]
        };
        this.filteredCharacters = [];
        this.filteredCharacters2 = [];
    }
    SimpsonCharacterService.prototype.getAllCharacters = function () {
        return this.characters;
    };
    SimpsonCharacterService.prototype.getAllBasicCharacters = function () {
        return this.basicCharacters;
    };
    SimpsonCharacterService.prototype.getTwoFamilies = function () {
        return this.splitCharacterFamilies;
    };
    SimpsonCharacterService.prototype.getEmptyCharacter = function () {
        return {
            orderId: 555,
            name: ""
        };
    };
    SimpsonCharacterService.prototype.filterCharacters = function (e, filteredCharacterName, myCharacters, incomingCharacter) {
        // console.log("DS: e", e)
        // console.log("DS: filteredCharacterName", filteredCharacterName)
        // console.log("DS: myCharacters", myCharacters)
        console.log("incomingCharacter", incomingCharacter);
        this.filteredCharacters2 = myCharacters.filter(function (d) { return d != incomingCharacter; });
        var isChecked = e.target.checked; // Used on the line below: if(isChecked)
        if (isChecked == true) {
            return this.filteredCharacters2; // return Filtered Data.....returns it to Component
        }
        else {
            var itemToReAdd;
            console.log("filteredCharacterName", filteredCharacterName);
            this.filteredCharacters2.push(incomingCharacter); // Add to the Filtered Data
            return this.filteredCharacters2; // Sends back to Component. 
        }
    };
    SimpsonCharacterService.prototype.sortData = function (tmc) {
        var sortByData = tmc.sort(function (a, b) { return a.orderId - b.orderId; });
        return sortByData;
    };
    SimpsonCharacterService.prototype.loSort = function () {
    };
    SimpsonCharacterService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], SimpsonCharacterService);
    return SimpsonCharacterService;
}());
exports.SimpsonCharacterService = SimpsonCharacterService;
