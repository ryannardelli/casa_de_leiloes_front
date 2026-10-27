import type { BidsAction, BidsState } from "../models/Bid";

export const initialStateBids: BidsState = {
  lotBids: [],
  myBids: [],
  liveRoom: null,
  selectedBid: null,

  selectedLot: null,
  loadingLotById: false,
  errorLotById: null,

  loadingCreateBid: false,
  loadingLotBids: false,
  loadingMyBids: false,
  loadingLiveRoom: false,

  errorCreateBid: null,
  errorLotBids: null,
  errorMyBids: null,
  errorLiveRoom: null,
};

export function bidsReducer(
  state: BidsState,
  action: BidsAction
): BidsState {
  switch (action.type) {
    case "SET_LOT_BIDS":
      return { ...state, lotBids: action.payload };

    case "SET_MY_BIDS":
      return { ...state, myBids: action.payload };

    case "SET_LIVE_ROOM":
      return { ...state, liveRoom: action.payload };

    case "SET_SELECTED_BID":
      return { ...state, selectedBid: action.payload };

    case "SET_SELECTED_LOT":
      return { ...state, selectedLot: action.payload };

    case "SET_LOADING_CREATE_BID":
      return { ...state, loadingCreateBid: action.payload };

    case "SET_LOADING_LOT_BIDS":
      return { ...state, loadingLotBids: action.payload };

    case "SET_LOADING_MY_BIDS":
      return { ...state, loadingMyBids: action.payload };

    case "SET_LOADING_LIVE_ROOM":
      return { ...state, loadingLiveRoom: action.payload };

    case "SET_LOADING_LOT_BY_ID":
      return { ...state, loadingLotById: action.payload };

    case "SET_ERROR_CREATE_BID":
      return { ...state, errorCreateBid: action.payload };

    case "SET_ERROR_LOT_BIDS":
      return { ...state, errorLotBids: action.payload };

    case "SET_ERROR_MY_BIDS":
      return { ...state, errorMyBids: action.payload };

    case "SET_ERROR_LIVE_ROOM":
      return { ...state, errorLiveRoom: action.payload };

    case "SET_ERROR_LOT_BY_ID":
      return { ...state, errorLotById: action.payload };

    default:
      return state;
  }
}
