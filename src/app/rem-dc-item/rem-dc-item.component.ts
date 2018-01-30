import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rem-dc-item',
  templateUrl: './rem-dc-item.component.html',
  styleUrls: ['./rem-dc-item.component.scss']
})
export class RemDcItemComponent implements OnInit {
  dcOpened = false; 

  constructor() { }

  ngOnInit() {
  }

  collapseDc(){
    this.dcOpened = !this.dcOpened;
  }

}
