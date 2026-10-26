export type PublicLotStatus =
  | "LIVE"
  | "SCHEDULED"
  | "CLOSED"
  | "CANCELLED";

export type PublicLotsState = {
  lots: PublicLot[];
  liveLots: PublicLot[];
  loadingLots: boolean;
  loadingLiveLots: boolean;
  errorLots: string;
  errorLiveLots: string;
  selectedLot: PublicLot | null;
  loadingLotDetails: boolean;
  errorLotDetails: string;
};

export type PublicLotsAction =
  | { type: "SET_LOTS"; payload: PublicLot[] }
  | { type: "SET_LOADING_LOTS"; payload: boolean }
  | { type: "SET_ERROR_LOTS"; payload: string }
  | { type: "SET_LIVE_LOTS"; payload: PublicLot[] }
  | { type: "SET_LOADING_LIVE_LOTS"; payload: boolean }
  | { type: "SET_ERROR_LIVE_LOTS"; payload: string }
  | { type: "SET_SELECTED_LOT"; payload: PublicLot }
  | { type: "SET_LOADING_LOT_DETAILS"; payload: boolean }
  | { type: "SET_ERROR_LOT_DETAILS"; payload: string };

export interface PublicLot {
  id: number;
  auctioneerId: number;
  externalItemId: string;
  title: string;
  description: string;
  imageUrl: string;
  currentPrice: string;
  startingPrice: string;
  minimumIncrement: string;
  finalPrice: string | null;
  startAt: string;
  endAt: string;
  status: PublicLotStatus;
  settledAt: string | null;
  winnerId: number | null;
  createdAt: string;
  updatedAt: string;
  attributes: {
    artist?: string;
    culture?: string;
    department?: string;
    medium?: string;
    objectDate?: string;
    [key: string]: unknown;
  };
}