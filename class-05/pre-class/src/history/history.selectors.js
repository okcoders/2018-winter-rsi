import { pickBy } from "lodash";
import { createSelector } from "reselect";

const items = state => state.history.items;
const filter = state => state.history.filter;

export const slowVisibleHistory = state => {
  const items = state.history.items;
  const filter = state.history.filter;
  return pickBy(items, (v, k) => {
    if (filter === "all") {
      return true;
    }
    return v.star;
  });
};

export const visibleHistory = createSelector(
  items,
  filter,
  (items, filter) => {
    return pickBy(items, (v, k) => {
      if (filter === "all") {
        return true;
      }
      return v.star;
    });
  }
);
