import { useEffect, useReducer, type ReactNode, useCallback } from "react";
import { ProfileContext } from "./ProfileContext";
import {
  getUserProfiles,
  getMenusByProfileId,
} from "../../services/profile";
import { useAuth } from "../../hooks/useAuth";
import { initialStateProfile, profileReducer } from "../../reducers/profileReducer";

type ProfileProviderProps = {
  children: ReactNode;
};

export const ProfileProvider = ({ children }: ProfileProviderProps) => {
  const [stateProfile, dispatchProfile] = useReducer(
    profileReducer,
    initialStateProfile
  );

  const { state } = useAuth();

  const loadMenusByLoggedUser = useCallback(async (profileId: number) => {
  try {
    dispatchProfile({ type: "SET_LOADING_MENUS_LOGGED_USER", payload: true });

    const menus = await getMenusByProfileId(profileId);

    dispatchProfile({
      type: "SET_MENUS_LOGGED_USER",
      payload: menus,
    });
  } catch (error) {
    dispatchProfile({
      type: "SET_ERROR_MENUS_LOGGED_USER",
      payload: "Erro ao carregar menus do usuário",
    });
     console.log(error);
  } finally {
    dispatchProfile({
      type: "SET_LOADING_MENUS_LOGGED_USER",
      payload: false,
    });
  }
}, []);

  const loadUserProfiles = useCallback(async () => {
    if (!state.user) return;

    try {
      dispatchProfile({ type: "SET_LOADING_PROFILES", payload: true });

      const profiles = await getUserProfiles();

      dispatchProfile({
        type: "SET_PROFILE",
        payload: profiles,
      });
    } catch (error) {
      console.error(error);
      dispatchProfile({
        type: "SET_ERROR_PROFILES",
        payload: "Erro ao carregar perfis",
      });
    } finally {
      dispatchProfile({ type: "SET_LOADING_PROFILES", payload: false });
    }
  }, [state.user]);

  useEffect(() => {
    if (state.loading) return;
    if (!state.user) return;

    loadUserProfiles();
  }, [state.loading, state.user, loadUserProfiles]);

  useEffect(() => {
  if (!state.loading && state.user?.profile?.id) {
    loadMenusByLoggedUser(state.user.profile.id);
  }
}, [state.user?.profile?.id, state.loading, loadMenusByLoggedUser]);

   return (
    <ProfileContext.Provider
      value={{
        stateProfile,
        dispatchProfile,
        loadMenusByLoggedUser,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};