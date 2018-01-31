import { Component, OnInit ,  EventEmitter, Input, Output } from '@angular/core';
import { DcItem } from '../classes/dc-item';

@Component({
  selector: 'app-rem-dc-item',
  templateUrl: './rem-dc-item.component.html',
  styleUrls: ['./rem-dc-item.component.scss']
})
export class RemDcItemComponent implements OnInit {
  dcOpened = false; 
  cItem : DcItem;

  @Input()  dcEditMode: boolean;
  @Input()  item: DcItem;
  @Output() save = new EventEmitter<DcItem>();  

  constructor() { 
  }

  ngOnInit() {
        this.cItem = this.item;
  }

  apply(){
    this.save.emit(this.cItem);
  }

  collapseDc(){
    this.dcOpened = !this.dcOpened;
  }

}
