import type {
  PublicLot,
} from "../models/PublicLot";

export interface PublicLotsState {
  lots: PublicLot[];
  selectedLot: PublicLot | null;
  loadingLots: boolean;
  loadingLotDetails: boolean;
  errorLots: string | null;
  errorLotDetails: string | null;
}

export type PublicLotsAction =
  | { type: "SET_LOTS"; payload: PublicLot[] }
  | { type: "SET_SELECTED_LOT"; payload: PublicLot | null }
  | { type: "SET_LOADING_LOTS"; payload: boolean }
  | { type: "SET_LOADING_LOT_DETAILS"; payload: boolean }
  | { type: "SET_ERROR_LOTS"; payload: string }
  | { type: "SET_ERROR_LOT_DETAILS"; payload: string };

export const initialStatePublicLots: PublicLotsState = {
  lots: [],
  selectedLot: null,
  loadingLots: false,
  loadingLotDetails: false,
  errorLots: null,
  errorLotDetails: null,
};

export function publicLotsReducer(
  state: PublicLotsState,
  action: PublicLotsAction
): PublicLotsState {
  switch (action.type) {
    case "SET_LOTS":
      return {
        ...state,
        lots: action.payload,
      };

    case "SET_SELECTED_LOT":
      return {
        ...state,
        selectedLot: action.payload,
      };

    case "SET_LOADING_LOTS":
      return {
        ...state,
        loadingLots: action.payload,
      };

    case "SET_LOADING_LOT_DETAILS":
      return {
        ...state,
        loadingLotDetails: action.payload,
      };

    case "SET_ERROR_LOTS":
      return {
        ...state,
        errorLots: action.payload || null,
      };

    case "SET_ERROR_LOT_DETAILS":
      return {
        ...state,
        errorLotDetails: action.payload || null,
      };

    default:
      return state;
  }
}