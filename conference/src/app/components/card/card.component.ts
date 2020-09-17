import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {LectureModel} from "../../models/LectureModel";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
  host: {"class": "app-card"},
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {

  @Input()
  public lecture: LectureModel;


  constructor() {
  }

  ngOnInit(): void {
  }

}
