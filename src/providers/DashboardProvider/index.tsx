import {
    useReducer,
    type ReactNode,
    useCallback,
    useEffect,
} from "react";

import { DashboardContext } from "./DashboardContext";

import {
    dashboardReducer,
    initialStateDashboard,
} from "../../reducers/dashboardReducer";

import { dashboardService } from "../../services/dashboardService";
import { useAuth } from "../../hooks/useAuth";

type DashboardProviderProps = {
    children: ReactNode;
};

export const DashboardProvider = ({
    children,
}: DashboardProviderProps) => {
    const [stateDashboard, dispatchDashboard] = useReducer(
        dashboardReducer,
        initialStateDashboard
    );

    const { state } = useAuth();

    const loadBidderStats = useCallback(async () => {
        dispatchDashboard({
            type: "SET_LOADING_BIDDER_STATS",
            payload: true,
        });

        dispatchDashboard({
            type: "SET_ERROR_BIDDER_STATS",
            payload: null,
        });

        try {
            const stats = await dashboardService.getBidderStats();

            dispatchDashboard({
                type: "SET_BIDDER_STATS",
                payload: stats,
            });
        } catch (error: unknown) {
            dispatchDashboard({
                type: "SET_ERROR_BIDDER_STATS",
                payload:
                    error instanceof Error
                        ? error.message
                        : "Erro ao carregar as estatísticas do licitante.",
            });
        } finally {
            dispatchDashboard({
                type: "SET_LOADING_BIDDER_STATS",
                payload: false,
            });
        }
    }, []);

    const loadAuctioneerStats = useCallback(async () => {
        dispatchDashboard({
            type: "SET_LOADING_AUCTIONEER_STATS",
            payload: true,
        });

        dispatchDashboard({
            type: "SET_ERROR_AUCTIONEER_STATS",
            payload: null,
        });

        try {
            const stats = await dashboardService.getAuctioneerStats();

            dispatchDashboard({
                type: "SET_AUCTIONEER_STATS",
                payload: stats,
            });
        } catch (error: unknown) {
            dispatchDashboard({
                type: "SET_ERROR_AUCTIONEER_STATS",
                payload:
                    error instanceof Error
                        ? error.message
                        : "Erro ao carregar as estatísticas do leiloeiro.",
            });
        } finally {
            dispatchDashboard({
                type: "SET_LOADING_AUCTIONEER_STATS",
                payload: false,
            });
        }
    }, []);

    useEffect(() => {
        if (state.user?.profile.name === "Licitante") {
            loadBidderStats();
        }

        if (state.user?.profile.name === "Leiloeiro") {
            loadAuctioneerStats();
        }
    }, [
        state.user,
        loadBidderStats,
        loadAuctioneerStats,
    ]);

    return (
        <DashboardContext.Provider
            value={{
                stateDashboard,
                dispatchDashboard,
                loadBidderStats,
                loadAuctioneerStats,
            }}
        >
            {children}
        </DashboardContext.Provider>
    );
};