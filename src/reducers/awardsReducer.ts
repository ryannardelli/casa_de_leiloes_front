import type { AwardsAction, AwardsState } from "../models/Award";

export const initialStateAwards: AwardsState = {
  myAwards: [],
  selectedAward: null,

  loadingMyAwards: false,
  loadingAwardById: false,
  loadingCloseAward: false,

  errorMyAwards: null,
  errorAwardById: null,
  errorCloseAward: null,
};

export function awardsReducer(
  state: AwardsState,
  action: AwardsAction
): AwardsState {
  switch (action.type) {
    case "SET_MY_AWARDS":
      return {
        ...state,
        myAwards: action.payload,
      };

    case "SET_SELECTED_AWARD":
      return {
        ...state,
        selectedAward: action.payload,
      };

    case "SET_LOADING_MY_AWARDS":
      return {
        ...state,
        loadingMyAwards: action.payload,
      };

    case "SET_LOADING_AWARD_BY_ID":
      return {
        ...state,
        loadingAwardById: action.payload,
      };

    case "SET_LOADING_CLOSE_AWARD":
      return {
        ...state,
        loadingCloseAward: action.payload,
      };

    case "SET_ERROR_MY_AWARDS":
      return {
        ...state,
        errorMyAwards: action.payload,
      };

    case "SET_ERROR_AWARD_BY_ID":
      return {
        ...state,
        errorAwardById: action.payload,
      };

    case "SET_ERROR_CLOSE_AWARD":
      return {
        ...state,
        errorCloseAward: action.payload,
      };

    default:
      return state;
  }
}
