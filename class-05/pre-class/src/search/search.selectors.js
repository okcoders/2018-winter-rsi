import { get } from "lodash";

export const resolveResults = state => {
  return get(state.search.results, "items", []);
};
