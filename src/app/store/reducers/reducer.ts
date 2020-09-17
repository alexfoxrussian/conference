import {AppState} from "../index";
import {combineReducers, Reducer} from "redux"
import {filtersReducer} from "./filters.reducer";

export const reducers: Reducer = combineReducers<AppState>({
  filters: filtersReducer})
