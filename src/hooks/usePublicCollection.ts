import { useContext } from "react";
import { PublicCollectionContext } from "../providers/PublicCollectionProvider/PublicCollectionContext";

export function usePublicCollection() {
    return useContext(PublicCollectionContext)
}