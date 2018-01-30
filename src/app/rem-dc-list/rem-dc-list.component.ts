import { Component, OnInit } from '@angular/core';
import { DcItemsService } from '../services/dc-items.service';

@Component({
  selector: 'app-rem-dc-list',
  templateUrl: './rem-dc-list.component.html',
  styleUrls: ['./rem-dc-list.component.scss']
})
export class RemDcListComponent implements OnInit {
  itemList = [];
  constructor( public dcItemsService: DcItemsService) { 
    this.itemList = dcItemsService.getDcItemList();
  }

  ngOnInit() {
  }

}
