export interface AuctioneerLot {
    id: string;
    itemId: string;
    title: string;
    description?: string;
    startingBid: number;
    reservePrice?: number;
    status: "ACTIVE" | "CANCELLED" | "FINISHED"; // Ajuste conforme os status da sua API
    createdAt?: string;
    updatedAt?: string;
}

export interface CreateAuctioneerLotPayload {
    itemId: string;
    startingBid: number;
    reservePrice?: number;
    title?: string;
    description?: string;
}

export interface UpdateAuctioneerLotPayload {
    title?: string;
    description?: string;
    startingBid?: number;
    reservePrice?: number;
}

export interface AuctioneerLotState {
    lots: AuctioneerLot[];
    loadingLots: boolean;
    errorLots: string | null;
}

export type AuctioneerLotAction =
    | {
          type: "SET_LOTS";
          payload: AuctioneerLot[];
      }
    | {
          type: "ADD_LOT";
          payload: AuctioneerLot;
      }
    | {
          type: "UPDATE_LOT";
          payload: AuctioneerLot;
      }
    | {
          type: "CANCEL_LOT";
          payload: string;
      }
    | {
          type: "SET_LOADING_LOTS";
          payload: boolean;
      }
    | {
          type: "SET_ERROR_LOTS";
          payload: string | null;
      };