import { useContext } from "react";
import { DashboardContext } from "../providers/DashboardProvider/DashboardContext";

export function useDashboard() {
    return useContext(DashboardContext)
}