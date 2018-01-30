import { Injectable } from '@angular/core';

@Injectable()
export class DcItemsService {
  dcItems = [];

  constructor() { }

  getDcItemList(){
    this.dcItems = JSON.parse(localStorage.getItem('dcItems'));
    return this.dcItems;
  }

  addDcItem(item){
    this.dcItems.push(item);
    localStorage.setItem('dcItems', JSON.stringify(this.dcItems));
  }

  

}
