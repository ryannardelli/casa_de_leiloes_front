import type { LotStatus } from "./LiveRoom";

export interface AuctioneerLot {
  id: number;
  auctioneerId: number;
  externalItemId: string;
  title: string;
  description: string;
  imageUrl: string;
  attributes: {
    artist: string;
    medium: string;
    culture: string;
    department: string;
    objectDate: string;
  };
  startingPrice: string;
  minimumIncrement: string;
  currentPrice: string;
  startAt: string;
  endAt: string;
  status: LotStatus;
  winnerId: number | null;
  finalPrice: string | null;
  settledAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Artwork {
  externalItemId: number;
  title: string;
  artist: string;
  objectDate: string;
  medium: string;
  imageUrl: string;
  department: string;
  category: string;
}

export interface CreateAuctioneerLotPayload {
  externalItemId: string;
  startingPrice: number;
  minimumIncrement: number;
  startAt: string;
  endAt: string;
}

export interface CreateAuctioneerLotResponse extends AuctioneerLot {
  message: string;
}

export interface UpdateAuctioneerLotPayload {
    title?: string;
    description?: string;
    startingBid?: number;
    reservePrice?: number;
}

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

export type AuctioneerLotAction =
    | { type: "SET_LOTS"; payload: AuctioneerLot[] }
    | { type: "ADD_LOT"; payload: AuctioneerLot }
    | { type: "UPDATE_LOT"; payload: AuctioneerLot }
    | { type: "CANCEL_LOT"; payload: string }
    | { type: "SET_LOADING_LOTS"; payload: boolean }
    | { type: "SET_ERROR_LOTS"; payload: string | null }
    | { type: "SET_LIVE_LOTS"; payload: AuctioneerLot[] }
    | { type: "SET_CLOSED_LOTS"; payload: AuctioneerLot[] }
    | { type: "SET_LOADING_LIVE_LOTS"; payload: boolean }
    | { type: "SET_LOADING_CLOSED_LOTS"; payload: boolean }
    | { type: "SET_ERROR_LIVE_LOTS"; payload: string | null }
    | { type: "SET_ERROR_CLOSED_LOTS"; payload: string | null };