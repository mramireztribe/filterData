import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-items',
  templateUrl: './accordion-items.component.html',
  styleUrls: ['./accordion-items.component.scss']
})
export class AccordionItemsComponent implements OnInit {

  @Input() id: any; // needed for Bootsrap Accordion to work correctly
  @Input() filter: any;
  @Input() header: any;

  constructor() { }

  ngOnInit(): void {
    console.log("This is our ID", this.id)
  }

}
