import { createContext } from "react";

import type {
    DashboardState,
    DashboardAction,
} from "../../models/Dashboard";

import { initialStateDashboard } from "../../reducers/dashboardReducer";

type DashboardContextType = {
    stateDashboard: DashboardState;

    dispatchDashboard: (action: DashboardAction) => void;

    loadBidderStats: () => Promise<void>;

    loadAuctioneerStats: () => Promise<void>;
};

export const DashboardContext =
    createContext<DashboardContextType>({
        stateDashboard: initialStateDashboard,

        dispatchDashboard: () => undefined,

        loadBidderStats: async () => {
            throw new Error("loadBidderStats not implemented");
        },

        loadAuctioneerStats: async () => {
            throw new Error("loadAuctioneerStats not implemented");
        },
    });