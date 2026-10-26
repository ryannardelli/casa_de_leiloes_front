import { createContext } from "react";
import {
  initialStatePublicLots,
} from "../../reducers/publicLotsReducer";
import type {
  PublicLotsAction,
  PublicLotsState,
} from "../../reducers/publicLotsReducer";

type PublicLotsContextType = {
  statePublicLots: PublicLotsState;
  dispatchPublicLots: (action: PublicLotsAction) => void;
  loadPublicLots: () => Promise<void>;
  loadPublicLotById: (id: number) => Promise<void>;
};

export const PublicLotsContext =
  createContext<PublicLotsContextType>({
    statePublicLots: initialStatePublicLots,

    dispatchPublicLots: () => undefined,

    loadPublicLots: async () => {
      throw new Error("loadPublicLots not implemented");
    },

    loadPublicLotById: async () => {
      throw new Error("loadPublicLotById not implemented");
    },
  });