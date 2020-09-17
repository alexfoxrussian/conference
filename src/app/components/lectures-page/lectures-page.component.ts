import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-lectures-page',
  templateUrl: './lectures-page.component.html',
  styleUrls: ['./lectures-page.component.less'],
  host:{"class": "app-lectures-page"},
  encapsulation: ViewEncapsulation.None
})
export class LecturesPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
