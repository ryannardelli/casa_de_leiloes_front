import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthContext";

export function useAuth() {
    return useContext(AuthContext);
}