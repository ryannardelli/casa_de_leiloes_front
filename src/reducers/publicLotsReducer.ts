import type {PublicLotsAction, PublicLotsState } from "../models/PublicLot";

export const initialStatePublicLots: PublicLotsState = {
  lots: [],
  liveLots: [],
  loadingLots: false,
  loadingLiveLots: false,
  errorLots: "",
  errorLiveLots: "",
  selectedLot: null,
  loadingLotDetails: false,
  errorLotDetails: "",
};

export function publicLotsReducer(
  state: PublicLotsState,
  action: PublicLotsAction
): PublicLotsState {
  switch (action.type) {
    case "SET_LOTS":
      return { ...state, lots: action.payload };

    case "SET_LOADING_LOTS":
      return { ...state, loadingLots: action.payload };

    case "SET_ERROR_LOTS":
      return { ...state, errorLots: action.payload };

    case "SET_LIVE_LOTS":
      return { ...state, liveLots: action.payload };

    case "SET_LOADING_LIVE_LOTS":
      return { ...state, loadingLiveLots: action.payload };

    case "SET_ERROR_LIVE_LOTS":
      return { ...state, errorLiveLots: action.payload };

    case "SET_SELECTED_LOT":
      return { ...state, selectedLot: action.payload };

    case "SET_LOADING_LOT_DETAILS":
      return { ...state, loadingLotDetails: action.payload };

    case "SET_ERROR_LOT_DETAILS":
      return { ...state, errorLotDetails: action.payload };

    default:
      return state;
  }
}