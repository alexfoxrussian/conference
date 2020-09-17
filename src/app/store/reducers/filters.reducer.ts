import {Reducer} from "redux";
import {FiltersActions, FiltersActionType} from "../actions/filters.actions";

const INITIAL_STATE = {languages:[], levels:[], searchValue:""};

export const filtersReducer: Reducer<any, FiltersActions> = (state: any = INITIAL_STATE, action: FiltersActions): any => {
  switch (action.type) {
    case FiltersActionType.CHANGE_FILTERS: {
      return { ...state,
        languages: action.payload.filters.languages,
        levels: action.payload.filters.levels,
        searchValue: action.payload.filters.searchValue
      };
    }
    default:
      return state;
  }
};
