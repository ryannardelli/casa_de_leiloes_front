import type { ProfileAction, ProfileState } from "../models/Profile";

export const initialStateProfile: ProfileState = {
  profiles: [],

  menusByLoggedUser: [],
  loadingMenusByLoggedUser: false,
  errorMenusByLoggedUser: null,

  loadingProfiles: false,
  errorProfiles: null,
};

export function profileReducer(state: ProfileState, action: ProfileAction) {
  switch (action.type) {
    case "SET_PROFILE":
    return {
        ...state,
        profiles: action.payload,
    };
    case "SET_LOADING_PROFILES":
      return { ...state, loadingProfiles: action.payload };

    case "SET_ERROR_PROFILES":
      return { ...state, errorProfiles: action.payload };

    case "SET_MENUS_LOGGED_USER":
      return { ...state, menusByLoggedUser: action.payload };

    case "SET_LOADING_MENUS_LOGGED_USER":
      return { ...state, loadingMenusByLoggedUser: action.payload };

    case "SET_ERROR_MENUS_LOGGED_USER":
      return {
        ...state,
        errorMenusByLoggedUser: action.payload,
        loadingMenusByLoggedUser: false
    };

    default:
      return state;
  }
}