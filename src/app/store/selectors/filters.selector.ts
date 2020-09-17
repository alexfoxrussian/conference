import {AppState} from "../index";
import {Filters} from "../../models/filters";

export const selectFiltersState = (state: AppState): Filters => state.filters;
