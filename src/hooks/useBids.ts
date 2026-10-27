import { useContext } from "react";
import { BidsContext } from "../providers/BidsProvider/BidsContext";

export function useBids() {
    return useContext(BidsContext)
}