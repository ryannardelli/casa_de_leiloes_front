import type { AuctioneerLot } from "../models/AuctioneerLot";

export type AuctioneerLotState = {
    lots: AuctioneerLot[];
    loadingLots: boolean;
    errorLots: string | null;
};

export type AuctioneerLotAction =
    | { type: "SET_LOTS"; payload: AuctioneerLot[] }
    | { type: "ADD_LOT"; payload: AuctioneerLot }
    | { type: "UPDATE_LOT"; payload: AuctioneerLot }
    | { type: "CANCEL_LOT"; payload: string }
    | { type: "SET_LOADING_LOTS"; payload: boolean }
    | { type: "SET_ERROR_LOTS"; payload: string | null };

export const initialStateAuctioneerLot: AuctioneerLotState = {
    lots: [],
    loadingLots: false,
    errorLots: null,
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

        case "ADD_LOT":
            return {
                ...state,
                lots: [action.payload, ...state.lots],
            };

        case "UPDATE_LOT":
            return {
                ...state,
                lots: state.lots.map((lot) =>
                    lot.id === action.payload.id ? action.payload : lot
                ),
            };

        case "CANCEL_LOT":
            return {
                ...state,
                lots: state.lots.map((lot) =>
                    lot.id === action.payload ? { ...lot, status: "CANCELLED" } : lot // Ajuste o status conforme sua API
                ),
            };

        case "SET_LOADING_LOTS":
            return {
                ...state,
                loadingLots: action.payload,
            };

        case "SET_ERROR_LOTS":
            return {
                ...state,
                errorLots: action.payload || null,
            };

        default:
            return state;
    }
}