import type { 
    AuctioneerLot, 
    CreateAuctioneerLotPayload, 
    UpdateAuctioneerLotPayload 
} from "../models/AuctioneerLot";
import { userAuthentication } from "./auth";

const API_URL = "/api/auctioneer/lots";

export const auctioneerLotService = {
    getLots: async (): Promise<AuctioneerLot[]> => {
        const token = userAuthentication.getTokenFromStorage();

        try {
            const res = await fetch(`${API_URL}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => null);
                throw new Error(errorData?.message ?? "Erro ao carregar os lotes do leiloeiro.");
            }

            const lots: AuctioneerLot[] = await res.json();
            return lots;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    createLot: async (data: CreateAuctioneerLotPayload): Promise<AuctioneerLot> => {
        const token = userAuthentication.getTokenFromStorage();

        try {
            const res = await fetch(`${API_URL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => null);
                throw new Error(errorData?.message ?? "Erro ao criar o lote.");
            }

            const lot: AuctioneerLot = await res.json();
            return lot;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    updateLot: async (id: string, data: UpdateAuctioneerLotPayload): Promise<AuctioneerLot> => {
        const token = userAuthentication.getTokenFromStorage();

        try {
            const res = await fetch(`${API_URL}/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => null);
                throw new Error(errorData?.message ?? "Erro ao atualizar o lote.");
            }

            const lot: AuctioneerLot = await res.json();
            return lot;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    cancelLot: async (id: string): Promise<void> => {
        const token = userAuthentication.getTokenFromStorage();

        try {
            const res = await fetch(`${API_URL}/${id}/cancel`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => null);
                throw new Error(errorData?.message ?? "Erro ao cancelar o lote.");
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
};