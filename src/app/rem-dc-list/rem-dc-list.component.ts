import { Component, OnInit, ViewChild } from '@angular/core';
import { DcItemsService } from '../services/dc-items.service';
import { DcItem } from '../classes/dc-item';

@Component({
  selector: 'app-rem-dc-list',
  templateUrl: './rem-dc-list.component.html',
  styleUrls: ['./rem-dc-list.component.scss']
})
export class RemDcListComponent implements OnInit {
  @ViewChild('content') public contentModal;
  itemList : Array<DcItem> = new Array<DcItem>();
  addingItem : DcItem;
  constructor( public dcItemsService: DcItemsService) { 
    this.getItemList();
  }

  ngOnInit() {
  }

  getItemList(){
    this.itemList = this.dcItemsService.getDcItemList();
  }

  closeModal($event){
    console.log($event);
    this.dcItemsService.addDcItem($event);
    this.getItemList()
    this.contentModal.hide();
  }
  newItem(){
    this.addingItem = new DcItem;
    this.contentModal.show()
  }
}
