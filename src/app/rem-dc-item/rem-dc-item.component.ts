import { Component, OnInit ,  EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rem-dc-item',
  templateUrl: './rem-dc-item.component.html',
  styleUrls: ['./rem-dc-item.component.scss']
})
export class RemDcItemComponent implements OnInit {
  dcOpened = false; 
  cItem = {code:``,caption:``,text:``,link:``};

  @Input()  dcEditMode: any;
  @Input()  item: any;
  @Output() save = new EventEmitter<any>();  

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
