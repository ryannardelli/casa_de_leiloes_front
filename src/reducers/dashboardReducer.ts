import type {
    DashboardState,
    DashboardAction,
} from "../models/Dashboard";

export const initialStateDashboard: DashboardState = {
    bidderStats: null,
    auctioneerStats: null,

    loadingBidderStats: false,
    loadingAuctioneerStats: false,

    errorBidderStats: null,
    errorAuctioneerStats: null,
};

export function dashboardReducer(
    state: DashboardState,
    action: DashboardAction
): DashboardState {
    switch (action.type) {
        case "SET_BIDDER_STATS":
            return {
                ...state,
                bidderStats: action.payload,
            };

        case "SET_AUCTIONEER_STATS":
            return {
                ...state,
                auctioneerStats: action.payload,
            };

        case "SET_LOADING_BIDDER_STATS":
            return {
                ...state,
                loadingBidderStats: action.payload,
            };

        case "SET_LOADING_AUCTIONEER_STATS":
            return {
                ...state,
                loadingAuctioneerStats: action.payload,
            };

        case "SET_ERROR_BIDDER_STATS":
            return {
                ...state,
                errorBidderStats: action.payload,
            };

        case "SET_ERROR_AUCTIONEER_STATS":
            return {
                ...state,
                errorAuctioneerStats: action.payload,
            };

        default:
            return state;
    }
}