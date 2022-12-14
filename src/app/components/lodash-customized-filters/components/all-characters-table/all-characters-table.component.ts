import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-all-characters-table',
  templateUrl: './all-characters-table.component.html',
  styleUrls: ['./all-characters-table.component.scss']
})
export class AllCharactersTableComponent implements OnInit {

  @Input() allCharacters: any;

  isTableShown: boolean = false;
  selectedCell: boolean = false;

  styledCell: string = ""

  cellIndex: any;
  rowIndex: any;

  constructor() { }

  ngOnInit(): void {

  }

  showData() {
    this.isTableShown = !this.isTableShown;
  }

  tableCellClicked(e: any, i: any) {
    // gets clicked cell by row + cellIndex
    this.cellIndex = e.srcElement.cellIndex;
    this.rowIndex = i;
    this.styledCell = "active"
    this.selectedCell = true;
  }

  styleSelectedCell(i: any) {
    if (this.selectedCell && this.rowIndex == i) {
      return "active"
    }
    else {
      return ""
    }
  }

  sortByOrderId() {
    var sortedData = this.allCharacters.sort((a: any, b: any) => (a.orderId > b.orderId) ? 1 : -1);
  }

  sortByName() {
    var sortedData = this.allCharacters.sort((a: any, b: any) => (a.name > b.name) ? 1 : -1);
  }

  sortByGender() {
    var sortedData = this.allCharacters.sort((a: any, b: any) => (a.gender > b.gender) ? 1 : -1);
  }
}
