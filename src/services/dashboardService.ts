import type {
    BidderStats,
    AuctioneerStats,
} from "../models/Dashboard";

import { userAuthentication } from "./auth";

const API_URL = "/api/dashboard";

export const dashboardService = {
    getBidderStats: async (): Promise<BidderStats> => {
        const token = userAuthentication.getTokenFromStorage();

        const res = await fetch(`${API_URL}/bidder/stats`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        if (!res.ok) {
            const errorData = await res.json().catch(() => null);

            throw new Error(
                errorData?.message ??
                    "Erro ao carregar as estatísticas do licitante."
            );
        }

        return res.json();
    },

    getAuctioneerStats: async (): Promise<AuctioneerStats> => {
        const token = userAuthentication.getTokenFromStorage();

        const res = await fetch(`${API_URL}/auctioneer/stats`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        if (!res.ok) {
            const errorData = await res.json().catch(() => null);

            throw new Error(
                errorData?.message ??
                    "Erro ao carregar as estatísticas do leiloeiro."
            );
        }

        return res.json();
    },
};