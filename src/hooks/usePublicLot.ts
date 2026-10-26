import { useContext } from "react";
import { PublicLotsContext } from "../providers/PublicLotProvider/PublicLotsContext";

export function usePublicLot() {
    return useContext(PublicLotsContext)
}