import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardGroupModule} from "../card-group/card-group.module";
import {LecturesPageComponent} from "./lectures-page.component";
import {FiltersModule} from "../filters/filters.module";
import {AppState} from "../../store";
import {NgRedux} from "@angular-redux/store";
import {reducers} from "../../store/reducers/reducer";
import {createEpicMiddleware} from "redux-observable-es6-compat";
import {NgReduxModule} from "@angular-redux/store";


@NgModule({
  declarations: [LecturesPageComponent],
  imports: [
    CommonModule,
    CardGroupModule,
    FiltersModule,
    NgReduxModule
  ],
  exports: [LecturesPageComponent]
})
export class LecturesPageModule {
  constructor(private ngRedux: NgRedux<AppState>) {
    //const epics = combineEpics();
    const middleware = createEpicMiddleware();
    ngRedux.configureStore(reducers, {} as AppState, [middleware]);
    //ngReduxRouter.initialize((state: AppState) => state.route);
    //middleware.run(epics as any);
  }
}
