import type { Menu } from "./Menu";

export type ProfileName = "Licitante" | "Leiloeiro";

export interface Profile {
    id: number;
    name: ProfileName;
    description: string;
    active: boolean;
    system: boolean;
}

export type ProfileState = {
    profiles: Profile[];

    menusByLoggedUser: Menu[];
    loadingMenusByLoggedUser: boolean;
    errorMenusByLoggedUser: string | null;

    loadingProfiles: boolean;
    errorProfiles: string | null;
};

export type ProfileAction =
    | { type: "SET_MENUS_LOGGED_USER"; payload: Menu[] }
    | { type: "SET_LOADING_MENUS_LOGGED_USER"; payload: boolean }
    | { type: "SET_ERROR_MENUS_LOGGED_USER"; payload: string }
    | { type: "SET_LOADING_PROFILES"; payload: boolean }
    | { type: "SET_ERROR_PROFILES"; payload: string };

export const ProfileType = {
    AUCTIONEER: "Leiloeiro",
    BIDDER: "Licitante"
} as const;

export type ProfileType =
    typeof ProfileType[keyof typeof ProfileType];