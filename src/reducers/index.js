import { MOVIES } from "../actions";

export default function mvoies(state, action) {
  switch (action.type) {
    case MOVIES:
      console.log("Movies are ", action.items);
      return action.items;
    default:
      return state;
  }
}
