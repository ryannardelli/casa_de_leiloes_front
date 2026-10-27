import { createContext } from "react";

import type {
  Award,
  AwardsAction,
  AwardsState,
} from "../../models/Award";

import { initialStateAwards } from "../../reducers/awardsReducer";

type AwardsContextType = {
  stateAwards: AwardsState;
  dispatchAwards: (action: AwardsAction) => void;

  loadMyAwards: () => Promise<Award[]>;
  loadAwardById: (lotId: number) => Promise<Award>;
  closeLotAward: (lotId: number) => Promise<Award>;
};

export const AwardsContext = createContext<AwardsContextType>({
  stateAwards: initialStateAwards,
  dispatchAwards: () => undefined,

  loadMyAwards: async (): Promise<Award[]> => {
    throw new Error("loadMyAwards not implemented");
  },

  loadAwardById: async (): Promise<Award> => {
    throw new Error("loadAwardById not implemented");
  },

  closeLotAward: async (): Promise<Award> => {
    throw new Error("closeLotAward not implemented");
  },
});
