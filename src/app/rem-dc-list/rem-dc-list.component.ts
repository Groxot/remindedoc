import { Component, OnInit, ViewChild } from '@angular/core';
import { DcItemsService } from '../services/dc-items.service';

@Component({
  selector: 'app-rem-dc-list',
  templateUrl: './rem-dc-list.component.html',
  styleUrls: ['./rem-dc-list.component.scss']
})
export class RemDcListComponent implements OnInit {
  @ViewChild('content') public contentModal;
  itemList = [];
  addingItem = {code:``,caption:``,text:``,link:``};
  constructor( public dcItemsService: DcItemsService) { 
    this.itemList = dcItemsService.getDcItemList();
  }

  ngOnInit() {
  }

  closeModal($event){
    console.log($event);
    this.dcItemsService.addDcItem($event);
    this.contentModal.hide();
  }
  newItem(){
    this.addingItem = {code:``,caption:``,text:``,link:``};
    this.contentModal.show()
  }
}
