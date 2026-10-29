export interface BidderStats {
    totalBids: number;
    ongoingAuctions: number;
    wonLots: number;
    totalAmountWon: number;
}

export interface AuctioneerStats {
    activeLots: number;
    totalBids: number;
    closedAuctions: number;
    totalAmountRaised: number;
}

export type DashboardState = {
    bidderStats: BidderStats | null;
    auctioneerStats: AuctioneerStats | null;

    loadingBidderStats: boolean;
    loadingAuctioneerStats: boolean;

    errorBidderStats: string | null;
    errorAuctioneerStats: string | null;
};

export type DashboardAction =
    | { type: "SET_BIDDER_STATS"; payload: BidderStats }
    | { type: "SET_AUCTIONEER_STATS"; payload: AuctioneerStats }
    | { type: "SET_LOADING_BIDDER_STATS"; payload: boolean }
    | { type: "SET_LOADING_AUCTIONEER_STATS"; payload: boolean }
    | { type: "SET_ERROR_BIDDER_STATS"; payload: string | null }
    | { type: "SET_ERROR_AUCTIONEER_STATS"; payload: string | null };