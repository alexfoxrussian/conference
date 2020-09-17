import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LanguageType} from "../../enums/language.type";
import {LevelType} from "../../enums/level.type";
import {Filters} from "../../models/filters";
import {NgRedux} from "@angular-redux/store";
import {AppState} from "../../store";
import {changeFilters} from "../../store/actions/filters.actions";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.less'],
  host: {"class": "app-filters"},
  encapsulation: ViewEncapsulation.None
})
export class FiltersComponent implements OnInit {

  public languages: string[] = [LanguageType.en, LanguageType.ru];
  public levels: string[] = [LevelType.hot, LevelType.intermediate, LevelType.advanced, LevelType.academic];


  public languageModel: any = {
    "en": false,
    "ru": false
  }

  public levelModel: any = {
    "hot": false,
    "intermediate": false,
    "advanced": false,
    "academic": false
  }

  private defaultLanguageModel: any;
  private defaultLevelModel: any;

  public searchModel: string = "";

  private filters: Filters = {
    languages: [],
    levels: [],
    searchValue: ""
  };

  constructor(private store: NgRedux<AppState>) {
  }

  ngOnInit(): void {
    this.defaultLanguageModel = {...this.languageModel};
    this.defaultLevelModel = {...this.levelModel};
    this.searchModel = "";
  }

  public onSearchValueChange(event: any) {
    this.filters.searchValue = event;
    this.searchModel = event;
    this.store.dispatch(changeFilters(this.filters));
  }

  public onLanguageChange() {
    this.filters.languages = Object.keys(this.languageModel).filter((item => this.languageModel[item]));
    this.store.dispatch(changeFilters(this.filters));
  }

  public onLevelChange() {
    this.filters.levels = Object.keys(this.levelModel).filter((item => this.levelModel[item]));
    this.store.dispatch(changeFilters(this.filters));
  }

  public resetFilters() {
    this.languageModel = {...this.defaultLanguageModel};
    this.levelModel = {...this.defaultLevelModel};
    this.searchModel = "";
    this.filters.languages = [];
    this.filters.levels = [];
    this.filters.searchValue = "";
    this.store.dispatch(changeFilters(this.filters));
  }
}
