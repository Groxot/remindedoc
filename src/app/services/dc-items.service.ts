import { Injectable } from '@angular/core';
import { DcItem } from '../classes/dc-item';

@Injectable()
export class DcItemsService {
  dcItems : Array<DcItem> = new Array<DcItem>(); 

  constructor() {  }

  getDcItemList(){
    this.dcItems = JSON.parse(localStorage.getItem('dcItems'));
    if(this.dcItems == null){
      this.dcItems = [];
    }
    return this.dcItems;
  }

  addDcItem(item){
    this.dcItems.push(item);
    localStorage.setItem('dcItems', JSON.stringify(this.dcItems));
  }

  

}
