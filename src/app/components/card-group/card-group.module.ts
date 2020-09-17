import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LectureService} from "../../services/lecture.service";
import {HttpClient} from "@angular/common/http";
import {CardGroupComponent} from "./card-group.component";
import {CardModule} from "../card/card.module";



@NgModule({
  declarations: [CardGroupComponent],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [CardGroupComponent],
  providers: [LectureService, HttpClient]
})
export class CardGroupModule { }
