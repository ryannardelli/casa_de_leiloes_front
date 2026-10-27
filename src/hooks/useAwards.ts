import { useContext } from "react";
import { AwardsContext } from "../providers/AwardsProvider/AwardsContext";

export function useAwards() {
    return useContext(AwardsContext)
}