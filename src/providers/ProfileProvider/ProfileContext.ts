import { createContext } from "react";
import type { ProfileAction, ProfileState } from "../../models/Profile";
import { initialStateProfile } from "../../reducers/profileReducer";

type ProfileContextType = {
  stateProfile: ProfileState;
  dispatchProfile: (action: ProfileAction) => void;

  loadMenusByLoggedUser: (profileId: number) => Promise<void>;
};

export const ProfileContext = createContext<ProfileContextType>({
  stateProfile: initialStateProfile,
  dispatchProfile: () => undefined,

  loadMenusByLoggedUser: async () => {
    throw new Error("loadMenusByLoggedUser not implemented");
  },
});