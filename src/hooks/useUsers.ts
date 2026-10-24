import { useContext } from "react";
import { UserContext } from "../providers/UsersProvider/UserContext";

export function useUsers() {
    return useContext(UserContext);
}