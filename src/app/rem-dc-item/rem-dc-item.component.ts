import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rem-dc-item',
  templateUrl: './rem-dc-item.component.html',
  styleUrls: ['./rem-dc-item.component.scss']
})
export class RemDcItemComponent implements OnInit {
  dcOpened = false; 
  item = {};
  

  constructor() { 
    this.item = {code : `function sayHi(name) {
      var phrase = "Привет, " + name ;
      alert( phrase );
    }
    sayHi('Вася');`};
  }

  ngOnInit() {
  }

  collapseDc(){
    this.dcOpened = !this.dcOpened;
  }

}
