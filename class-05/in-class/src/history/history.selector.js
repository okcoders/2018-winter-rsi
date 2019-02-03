import { filter } from "lodash";

export function itemsBasedOnFilter(state) {
  if (state.history.showAll) {
    return state.history.items;
  }
  return filter(state.history.items, item => item.star);
}
