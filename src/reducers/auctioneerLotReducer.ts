import type { AuctioneerLot, AuctioneerLotAction } from "../models/AuctioneerLot";

export type AuctioneerLotState = {
    lots: AuctioneerLot[];
    liveLots: AuctioneerLot[];
    closedLots: AuctioneerLot[];

    loadingLots: boolean;
    loadingLiveLots: boolean;
    loadingClosedLots: boolean;

    errorLots: string | null;
    errorLiveLots: string | null;
    errorClosedLots: string | null;
};

export const initialStateAuctioneerLot: AuctioneerLotState = {
    lots: [],
    liveLots: [],
    closedLots: [],

    loadingLots: false,
    loadingLiveLots: false,
    loadingClosedLots: false,

    errorLots: null,
    errorLiveLots: null,
    errorClosedLots: null,
};

export function auctioneerLotReducer(
    state: AuctioneerLotState,
    action: AuctioneerLotAction
): AuctioneerLotState {
    switch (action.type) {
        case "SET_LOTS":
            return {
                ...state,
                lots: action.payload,
            };

        case "SET_LIVE_LOTS":
            return {
                ...state,
                liveLots: action.payload,
            };

        case "SET_CLOSED_LOTS":
            return {
                ...state,
                closedLots: action.payload,
            };

        case "ADD_LOT":
            return {
                ...state,
                lots: [action.payload, ...state.lots],
            };

        case "UPDATE_LOT":
            return {
                ...state,
                lots: state.lots.map((lot) =>
                    lot.id === action.payload.id
                        ? action.payload
                        : lot
                ),
            };

        case "CANCEL_LOT":
            return {
                ...state,
                lots: state.lots.map((lot) =>
                    String(lot.id) === action.payload
                        ? { ...lot, status: "CANCELLED" }
                        : lot
                ),
            };

        case "SET_LOADING_LOTS":
            return {
                ...state,
                loadingLots: action.payload,
            };

        case "SET_LOADING_LIVE_LOTS":
            return {
                ...state,
                loadingLiveLots: action.payload,
            };

        case "SET_LOADING_CLOSED_LOTS":
            return {
                ...state,
                loadingClosedLots: action.payload,
            };

        case "SET_ERROR_LOTS":
            return {
                ...state,
                errorLots: action.payload,
            };

        case "SET_ERROR_LIVE_LOTS":
            return {
                ...state,
                errorLiveLots: action.payload,
            };

        case "SET_ERROR_CLOSED_LOTS":
            return {
                ...state,
                errorClosedLots: action.payload,
            };

        default:
            return state;
    }
}
