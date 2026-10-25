import { createContext } from "react";

import type {
    AuctioneerLot,
    AuctioneerLotAction,
    AuctioneerLotState,
    CreateAuctioneerLotPayload,
    UpdateAuctioneerLotPayload,
} from "../../models/AuctioneerLot";
import { initialStateAuctioneerLot } from "../../reducers/auctioneerLotReducer";

type AuctioneerLotContextType = {
    stateAuctioneerLot: AuctioneerLotState;

    dispatchAuctioneerLot: (
        action: AuctioneerLotAction
    ) => void;

    loadLots: () => Promise<void>;

    createLot: (
        data: CreateAuctioneerLotPayload
    ) => Promise<AuctioneerLot>;

    updateLot: (
        id: string,
        data: UpdateAuctioneerLotPayload
    ) => Promise<AuctioneerLot>;

    cancelLot: (id: string) => Promise<void>;
};

export const AuctioneerLotContext =
    createContext<AuctioneerLotContextType>({
        stateAuctioneerLot: initialStateAuctioneerLot,

        dispatchAuctioneerLot: () => undefined,

        loadLots: async () => {
            throw new Error(
                "loadLots not implemented"
            );
        },

        createLot: async () => {
            throw new Error(
                "createLot not implemented"
            );
        },

        updateLot: async () => {
            throw new Error(
                "updateLot not implemented"
            );
        },

        cancelLot: async () => {
            throw new Error(
                "cancelLot not implemented"
            );
        },
    });