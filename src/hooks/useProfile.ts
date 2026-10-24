import { useContext } from "react";
import { ProfileContext } from "../providers/ProfileProvider/ProfileContext";

export function useProfile() {
    return useContext(ProfileContext)
}