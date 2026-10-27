import { createContext } from "react";

import type {
  Bid,
  BidsAction,
  BidsState,
  CreateBidResponse,
} from "../../models/Bid";

import { initialStateBids } from "../../reducers/bidsReducer";
import type { LiveRoom } from "../../models/LiveRoom";

type BidsContextType = {
  stateBids: BidsState;
  dispatchBids: (action: BidsAction) => void;

  createBid: (
    lotId: number,
    amount: number
  ) => Promise<CreateBidResponse>;

  loadLotBids: (lotId: number) => Promise<Bid[]>;
  loadMyBids: () => Promise<Bid[]>;
  loadLiveRoom: (lotId: number) => Promise<LiveRoom>;

  loadBidsById: (lotId: number) => Promise<Bid>;
};

export const BidsContext = createContext<BidsContextType>({
  stateBids: initialStateBids,
  dispatchBids: () => undefined,

  createBid: async (): Promise<CreateBidResponse> => {
    throw new Error("createBid not implemented");
  },

  loadLotBids: async (): Promise<Bid[]> => {
    throw new Error("loadLotBids not implemented");
  },

  loadMyBids: async (): Promise<Bid[]> => {
    throw new Error("loadMyBids not implemented");
  },

  loadLiveRoom: async (): Promise<LiveRoom> => {
    throw new Error("loadLiveRoom not implemented");
  },

  loadBidsById: async (): Promise<Bid> => {
    throw new Error("loadLotById not implemented");
  },
});
