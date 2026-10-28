import {
    useReducer,
    type ReactNode,
    useCallback,
    useEffect,
} from "react";

import { AuctioneerLotContext } from "./AuctioneerLotContext";
import {
    auctioneerLotReducer,
    initialStateAuctioneerLot,
} from "../../reducers/auctioneerLotReducer";
import { auctioneerLotService } from "../../services/auctioneerLotService";
import { useAuth } from "../../hooks/useAuth";
import type { CreateAuctioneerLotPayload } from "../../models/AuctioneerLot";

type AuctioneerLotProviderProps = {
    children: ReactNode;
};

export const AuctioneerLotProvider = ({
    children,
}: AuctioneerLotProviderProps) => {
    const [
        stateAuctioneerLot,
        dispatchAuctioneerLot,
    ] = useReducer(
        auctioneerLotReducer,
        initialStateAuctioneerLot
    );

    const { state } = useAuth();

    const loadLots = useCallback(async () => {
        dispatchAuctioneerLot({
            type: "SET_LOADING_LOTS",
            payload: true,
        });

        dispatchAuctioneerLot({
            type: "SET_ERROR_LOTS",
            payload: null,
        });

        try {
            const lots = await auctioneerLotService.getLots();

            dispatchAuctioneerLot({
                type: "SET_LOTS",
                payload: lots,
            });
        } catch (error: unknown) {
            dispatchAuctioneerLot({
                type: "SET_ERROR_LOTS",
                payload:
                    error instanceof Error
                        ? error.message
                        : "Erro ao carregar os lotes.",
            });
        } finally {
            dispatchAuctioneerLot({
                type: "SET_LOADING_LOTS",
                payload: false,
            });
        }
    }, []);

    const loadLiveLots = useCallback(async () => {
        dispatchAuctioneerLot({
            type: "SET_LOADING_LIVE_LOTS",
            payload: true,
        });

        dispatchAuctioneerLot({
            type: "SET_ERROR_LIVE_LOTS",
            payload: null,
        });

        try {
            const lots = await auctioneerLotService.getLots("LIVE");

            dispatchAuctioneerLot({
                type: "SET_LIVE_LOTS",
                payload: lots,
            });
        } catch (error: unknown) {
            dispatchAuctioneerLot({
                type: "SET_ERROR_LIVE_LOTS",
                payload:
                    error instanceof Error
                        ? error.message
                        : "Erro ao carregar os lotes ao vivo.",
            });
        } finally {
            dispatchAuctioneerLot({
                type: "SET_LOADING_LIVE_LOTS",
                payload: false,
            });
        }
    }, []);

    const loadClosedLots = useCallback(async () => {
        dispatchAuctioneerLot({
            type: "SET_LOADING_CLOSED_LOTS",
            payload: true,
        });

        dispatchAuctioneerLot({
            type: "SET_ERROR_CLOSED_LOTS",
            payload: null,
        });

        try {
            const lots = await auctioneerLotService.getLots("CLOSED");

            dispatchAuctioneerLot({
                type: "SET_CLOSED_LOTS",
                payload: lots,
            });
        } catch (error: unknown) {
            dispatchAuctioneerLot({
                type: "SET_ERROR_CLOSED_LOTS",
                payload:
                    error instanceof Error
                        ? error.message
                        : "Erro ao carregar os lotes encerrados.",
            });
        } finally {
            dispatchAuctioneerLot({
                type: "SET_LOADING_CLOSED_LOTS",
                payload: false,
            });
        }
    }, []);

    const createLot = async (data: CreateAuctioneerLotPayload) => {
        try {
            const newLot = await auctioneerLotService.createLot(data);

            dispatchAuctioneerLot({
                type: "ADD_LOT",
                payload: newLot,
            });

            await Promise.all([
                loadLots(),
                loadLiveLots(),
                loadClosedLots(),
            ]);

            return newLot;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const updateLot = async (
        id: string,
        data: Record<string, any>
    ) => {
        try {
            const updatedLot = await auctioneerLotService.updateLot(
                id,
                data
            );

            dispatchAuctioneerLot({
                type: "UPDATE_LOT",
                payload: updatedLot,
            });

            await Promise.all([
                loadLots(),
                loadLiveLots(),
                loadClosedLots(),
            ]);

            return updatedLot;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const cancelLot = async (id: string) => {
        try {
            await auctioneerLotService.cancelLot(id);

            await Promise.all([
                loadLots(),
                loadLiveLots(),
                loadClosedLots(),
            ]);
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    useEffect(() => {
        if (state.user?.profile.name === "Leiloeiro") {
            loadLots();
            loadLiveLots();
            loadClosedLots();
        }
    }, [state.user, loadLots, loadLiveLots, loadClosedLots]);

    return (
        <AuctioneerLotContext.Provider
            value={{
                stateAuctioneerLot,
                dispatchAuctioneerLot,
                loadLots,
                loadLiveLots,
                loadClosedLots,
                createLot,
                updateLot,
                cancelLot,
            }}
        >
            {children}
        </AuctioneerLotContext.Provider>
    );
};
