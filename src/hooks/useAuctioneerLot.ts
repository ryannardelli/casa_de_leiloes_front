import { useContext } from "react";
import { AuctioneerLotContext } from "../providers/AuctioneerLotProvider/AuctioneerLotContext";

export function useAuctioneerLot() {
    return useContext(AuctioneerLotContext)
}