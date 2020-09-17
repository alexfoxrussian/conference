import {AppAction} from "../types/action.model";
import {Filters} from "../../models/filters";

export enum FiltersActionType {
  CHANGE_FILTERS = '[FILTERS] Change'
}

export type FiltersActions = ReturnType<typeof changeFilters>;

export const changeFilters = (filters: Filters): AppAction<FiltersActionType.CHANGE_FILTERS> => ({
  type: FiltersActionType.CHANGE_FILTERS,
  payload: {filters}
});
