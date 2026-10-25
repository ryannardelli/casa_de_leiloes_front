import {
    useReducer,
    type ReactNode,
    useCallback,
    useEffect,
} from "react";

import { AuctioneerLotContext } from "./AuctioneerLotContext";
import { auctioneerLotReducer, initialStateAuctioneerLot } from "../../reducers/auctioneerLotReducer";
import { auctioneerLotService } from "../../services/auctioneerLotService";

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
        } catch (error: any) {
            console.error(error);
            dispatchAuctioneerLot({
                type: "SET_ERROR_LOTS",
                payload: error.message || "Erro ao carregar os lotes.",
            });
        } finally {
            dispatchAuctioneerLot({
                type: "SET_LOADING_LOTS",
                payload: false,
            });
        }
    }, []);

    const createLot = async (data: Record<string, any>) => {
        try {
            const newLot = await auctioneerLotService.createLot(data);
            dispatchAuctioneerLot({
                type: "ADD_LOT",
                payload: newLot,
            });
            return newLot;
        } catch (error: any) {
            console.error(error);
            throw error;
        }
    };

    const updateLot = async (id: string, data: Record<string, any>) => {
        try {
            const updatedLot = await auctioneerLotService.updateLot(id, data);
            dispatchAuctioneerLot({
                type: "UPDATE_LOT",
                payload: updatedLot,
            });
            return updatedLot;
        } catch (error: any) {
            console.error(error);
            throw error;
        }
    };

    const cancelLot = async (id: string) => {
        try {
            await auctioneerLotService.cancelLot(id);
            dispatchAuctioneerLot({
                type: "CANCEL_LOT",
                payload: id,
            });
        } catch (error: any) {
            console.error(error);
            throw error;
        }
    };

    useEffect(() => {
        loadLots();
    }, [loadLots]);

    return (
        <AuctioneerLotContext.Provider
            value={{
                stateAuctioneerLot,
                dispatchAuctioneerLot,
                loadLots,
                createLot,
                updateLot,
                cancelLot,
            }}
        >
            {children}
        </AuctioneerLotContext.Provider>
    );
};