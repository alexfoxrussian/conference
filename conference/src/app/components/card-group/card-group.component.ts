import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LectureModel} from "../../models/LectureModel";
import {LectureService} from "../../services/lecture.service";
import {selectFiltersState} from "../../store/selectors/filters.selector";
import {Observable} from "rxjs";
import {Filters} from "../../models/filters";
import {select} from "@angular-redux/store";
import {AutoUnsubscribe} from "../../utils/auto-unsubscribe";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.less'],
  host: {"class": "app-card-group"},
  encapsulation: ViewEncapsulation.None
})
export class CardGroupComponent extends AutoUnsubscribe implements OnInit {

  public cards: LectureModel[] = [];
  public displayCards: LectureModel[] = [];

  @select(selectFiltersState) public filtersState$: Observable<Filters>;

  constructor(private lectureService: LectureService) {
    super();
  }

  ngOnInit(): void {
    this.lectureService.loadLectures().subscribe(
      (lectures) => {
        this.cards = lectures;
        this.displayCards = [...this.cards];
      }
    );
    this.filtersState$.pipe(takeUntil(this.streamEndSubject)).subscribe(
      (filters: Filters) => {
        this.filterLectures(filters);
      }
    )
  }

  public trackByFunc(index: number, card: LectureModel): any {
    return card?.id ?? card
  }


  private filterLectures(filters: Filters) {
    this.displayCards = [...this.cards];
    if (filters.languages.length > 0) {
      this.displayCards = this.displayCards.filter(card => filters.languages.includes(card.language));
    }
    if (filters.levels.length > 0) {
      this.displayCards = this.displayCards.filter(card => filters.levels.includes(card.level));
    }
    if (filters.searchValue.length > 0) {
      this.displayCards = this.displayCards.filter(card => card.lecture.toUpperCase().indexOf(filters.searchValue.toUpperCase())!= -1
        || card.author.toUpperCase().indexOf(filters.searchValue.toUpperCase())!= -1)
    }
  }
}
