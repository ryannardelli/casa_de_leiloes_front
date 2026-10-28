import {
  useCallback,
  useEffect,
  useReducer,
  type ReactNode,
} from "react";

import { BidsContext } from "./BidsContext";

import { useAuth } from "../../hooks/useAuth";

import {
  initialStateBids,
  bidsReducer,
} from "../../reducers/bidsReducer";

import {
  createBid as createBidService,
  getMyBids,
  getLotBids,
  getLiveRoom,
  getLotById,
} from "../../services/bids";

import type {
  Bid,
  CreateBidResponse,
} from "../../models/Bid";
import type { LiveRoom } from "../../models/LiveRoom";

type BidsProviderProps = {
  children: ReactNode;
};

export const BidsProvider = ({
  children,
}: BidsProviderProps) => {
  const [stateBids, dispatchBids] = useReducer(
    bidsReducer,
    initialStateBids
  );

  const { state } = useAuth();

  const userId = state.user?.id;
  const profileName = state.user?.profile?.name;

  const loadLotBids = useCallback(
    async (lotId: number): Promise<Bid[]> => {
      try {
        dispatchBids({
          type: "SET_LOADING_LOT_BIDS",
          payload: true,
        });

        dispatchBids({
          type: "SET_ERROR_LOT_BIDS",
          payload: null,
        });

        const bids = await getLotBids(lotId);

        dispatchBids({
          type: "SET_LOT_BIDS",
          payload: bids,
        });

        return bids;
      } catch (error) {
        dispatchBids({
          type: "SET_ERROR_LOT_BIDS",
          payload:
            error instanceof Error
              ? error.message
              : "Erro ao carregar histórico de lances.",
        });

        console.error("Erro ao carregar histórico:", error);

        throw error;
      } finally {
        dispatchBids({
          type: "SET_LOADING_LOT_BIDS",
          payload: false,
        });
      }
    },
    []
  );

  const loadBidsById = useCallback(
    async (lotId: number): Promise<Bid[]> => {
      try {
        dispatchBids({
          type: "SET_LOADING_LOT_BY_ID",
          payload: true,
        });

        dispatchBids({
          type: "SET_ERROR_LOT_BY_ID",
          payload: null,
        });

        const bids = await getLotById(lotId);

        dispatchBids({
          type: "SET_SELECTED_LOT",
          payload: bids,
        });

        return bids;
      } catch (error) {
        dispatchBids({
          type: "SET_ERROR_LOT_BY_ID",
          payload:
            error instanceof Error
              ? error.message
              : "Erro ao carregar os detalhes do lote.",
        });

        console.error(
          "Erro ao carregar detalhes do lote:",
          error
        );

        throw error;
      } finally {
        dispatchBids({
          type: "SET_LOADING_LOT_BY_ID",
          payload: false,
        });
      }
    },
    []
  );

  const loadMyBids = useCallback(
    async (): Promise<Bid[]> => {
      try {
        dispatchBids({
          type: "SET_LOADING_MY_BIDS",
          payload: true,
        });

        dispatchBids({
          type: "SET_ERROR_MY_BIDS",
          payload: null,
        });

        const bids = await getMyBids();

        dispatchBids({
          type: "SET_MY_BIDS",
          payload: bids,
        });

      return bids;
      } catch (error) {
        dispatchBids({
          type: "SET_ERROR_MY_BIDS",
          payload:
            error instanceof Error
              ? error.message
              : "Erro ao carregar seus lances.",
        });

        console.error("Erro ao carregar meus lances:", error);

        throw error;
      } finally {
        dispatchBids({
          type: "SET_LOADING_MY_BIDS",
          payload: false,
        });
      }
    },
    []
  );

  const loadLiveRoom = useCallback(
    async (lotId: number): Promise<LiveRoom> => {
      try {
        dispatchBids({
          type: "SET_LOADING_LIVE_ROOM",
          payload: true,
        });

        dispatchBids({
          type: "SET_ERROR_LIVE_ROOM",
          payload: null,
        });

        const liveRoom = await getLiveRoom(lotId);

        dispatchBids({
          type: "SET_LIVE_ROOM",
          payload: liveRoom,
        });

        return liveRoom;
      } catch (error) {
        dispatchBids({
          type: "SET_ERROR_LIVE_ROOM",
          payload:
            error instanceof Error
              ? error.message
              : "Erro ao carregar a sala ao vivo.",
        });

        console.error("Erro ao carregar sala ao vivo:", error);

        throw error;
      } finally {
        dispatchBids({
          type: "SET_LOADING_LIVE_ROOM",
          payload: false,
        });
      }
    },
    []
  );

  const createBid = useCallback(
    async (
      lotId: number,
      amount: number
    ): Promise<CreateBidResponse> => {
      try {
        dispatchBids({
          type: "SET_LOADING_CREATE_BID",
          payload: true,
        });

        dispatchBids({
          type: "SET_ERROR_CREATE_BID",
          payload: null,
        });

        const response = await createBidService(
          lotId,
          amount
        );

        const refreshResults = await Promise.allSettled([
          loadLotBids(lotId),
          loadLiveRoom(lotId),
          loadMyBids(),
        ]);

        refreshResults.forEach((result, index) => {
          if (result.status === "rejected") {
            console.error(
              `Falha ao atualizar dados após o lance (${index + 1}):`,
              result.reason
            );
          }
        });

        return response;
      } catch (error) {
        dispatchBids({
          type: "SET_ERROR_CREATE_BID",
          payload:
            error instanceof Error
              ? error.message
              : "Erro ao enviar lance.",
        });

        console.error("Erro ao criar lance:", error);

        throw error;
      } finally {
        dispatchBids({
          type: "SET_LOADING_CREATE_BID",
          payload: false,
        });
      }
    },
    [loadLotBids, loadLiveRoom, loadMyBids]
  );

  useEffect(() => {
    if (state.loading || !userId) {
      return;
    }

    if (profileName !== "Licitante") {
      return;
    }

    loadMyBids().catch(() => undefined);
  }, [state.loading, userId, profileName, loadMyBids]);

  return (
    <BidsContext.Provider
      value={{
        stateBids,
        dispatchBids,
        createBid,
        loadLotBids,
        loadMyBids,
        loadLiveRoom,
        loadBidsById,
      }}
    >
      {children}
    </BidsContext.Provider>
  );
};
