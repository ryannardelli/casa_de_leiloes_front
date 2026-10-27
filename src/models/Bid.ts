export interface Bid {
  id: number;
  lotId: number;
  bidderId: number;
  amount: number;
  previousHash: string | null;
  hash: string;
  createdAt: string;

  lot: BidLot | null;
}

export interface BidLot {
  title: string;
  imageUrl: string | null;
  currentPrice: number;
  status: "LIVE" | "CLOSED" | "SCHEDULED" | string;
}

export interface LiveRoom {
  lotId: number;
  currentBid: number;
  minimumIncrement: number;
  totalBids: number;
  bids: Bid[];
}

export interface CreateBidResponse {
  message: string;
  bid: Bid;
}

export interface LiveLot {
  id: number;
  currentPrice: number;
  startingPrice: number;
  minimumIncrement: number;
  endAt: string;
  status: string;
}

export interface LiveBid {
  id: number;
  bidderName: string;
  amount: number;
  createdAt: string;
}

export interface BidUpdatedEvent {
  bid: {
    id: number;
    lotId: number;
    bidderId?: number;
    bidderName?: string;
    amount: number;
    createdAt: string;
    status: string;
  };
  lot: {
    status: string;
    currentPrice: number;
    minimumNextBid: number;
    endAt: string;
    totalBids: number;
  };
}

export type BidsAction =
  | { type: "SET_LOT_BIDS"; payload: Bid[] }
  | { type: "SET_MY_BIDS"; payload: Bid[] }
  | { type: "SET_LIVE_ROOM"; payload: LiveRoom }
  | { type: "SET_SELECTED_BID"; payload: Bid | null }

  | { type: "SET_LOADING_CREATE_BID"; payload: boolean }
  | { type: "SET_LOADING_LOT_BIDS"; payload: boolean }
  | { type: "SET_LOADING_MY_BIDS"; payload: boolean }
  | { type: "SET_LOADING_LIVE_ROOM"; payload: boolean }

  | { type: "SET_ERROR_CREATE_BID"; payload: string | null }
  | { type: "SET_ERROR_LOT_BIDS"; payload: string | null }
  | { type: "SET_ERROR_MY_BIDS"; payload: string | null }
  | { type: "SET_ERROR_LIVE_ROOM"; payload: string | null };

export type BidsState = {
  lotBids: Bid[];
  myBids: Bid[];
  liveRoom: LiveRoom | null;
  selectedBid: Bid | null;

  loadingCreateBid: boolean;
  loadingLotBids: boolean;
  loadingMyBids: boolean;
  loadingLiveRoom: boolean;

  errorCreateBid: string | null;
  errorLotBids: string | null;
  errorMyBids: string | null;
  errorLiveRoom: string | null;
};