import { createContext } from "react";

import type {
  BidsAction,
  BidsState,
  CreateBidResponse,
} from "../../models/Bid";

import { initialStateBids } from "../../reducers/bidsReducer";

type BidsContextType = {
  stateBids: BidsState;
  dispatchBids: (action: BidsAction) => void;

  createBid: (
    lotId: number,
    amount: number
  ) => Promise<CreateBidResponse>;

  loadLotBids: (lotId: number) => Promise<void>;
  loadMyBids: () => Promise<void>;
  loadLiveRoom: (lotId: number) => Promise<void>;
};

export const BidsContext = createContext<BidsContextType>({
  stateBids: initialStateBids,
  dispatchBids: () => undefined,

  createBid: async (): Promise<CreateBidResponse> => {
    throw new Error("createBid not implemented");
  },

  loadLotBids: async (): Promise<void> => {
    throw new Error("loadLotBids not implemented");
  },

  loadMyBids: async (): Promise<void> => {
    throw new Error("loadMyBids not implemented");
  },

  loadLiveRoom: async (): Promise<void> => {
    throw new Error("loadLiveRoom not implemented");
  },
});
