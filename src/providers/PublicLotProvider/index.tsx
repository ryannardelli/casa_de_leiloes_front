import {
  useReducer,
  type ReactNode,
  useCallback,
  useEffect,
} from "react";

import {
  initialStatePublicLots,
  publicLotsReducer,
} from "../../reducers/publicLotsReducer";

import { PublicLotsContext } from "./PublicLotsContext";
import { publicLotsService } from "../../services/publicLot";

type PublicLotsProviderProps = {
  children: ReactNode;
};

export const PublicLotsProvider = ({
  children,
}: PublicLotsProviderProps) => {
  const [
    statePublicLots,
    dispatchPublicLots,
  ] = useReducer(
    publicLotsReducer,
    initialStatePublicLots
  );

  const loadPublicLots = useCallback(async () => {
    dispatchPublicLots({
      type: "SET_LOADING_LOTS",
      payload: true,
    });

    dispatchPublicLots({
      type: "SET_ERROR_LOTS",
      payload: "",
    });

    try {
      const lots = await publicLotsService.getLots();

      dispatchPublicLots({
        type: "SET_LOTS",
        payload: lots,
      });
    } catch (error) {
      dispatchPublicLots({
        type: "SET_ERROR_LOTS",
        payload:
          error instanceof Error
            ? error.message
            : "Não foi possível carregar os lotes públicos.",
      });
    } finally {
      dispatchPublicLots({
        type: "SET_LOADING_LOTS",
        payload: false,
      });
    }
  }, []);

  const loadPublicLotById = useCallback(async (id: number) => {
    dispatchPublicLots({
      type: "SET_LOADING_LOT_DETAILS",
      payload: true,
    });

    dispatchPublicLots({
      type: "SET_ERROR_LOT_DETAILS",
      payload: "",
    });

    try {
      const lot = await publicLotsService.getLotById(id);

      dispatchPublicLots({
        type: "SET_SELECTED_LOT",
        payload: lot,
      });
    } catch (error) {
      dispatchPublicLots({
        type: "SET_ERROR_LOT_DETAILS",
        payload:
          error instanceof Error
            ? error.message
            : "Não foi possível carregar os detalhes do lote.",
      });
    } finally {
      dispatchPublicLots({
        type: "SET_LOADING_LOT_DETAILS",
        payload: false,
      });
    }
  }, []);

  useEffect(() => {
    loadPublicLots();
  }, [loadPublicLots]);

  return (
    <PublicLotsContext.Provider
      value={{
        statePublicLots,
        dispatchPublicLots,
        loadPublicLots,
        loadPublicLotById,
      }}
    >
      {children}
    </PublicLotsContext.Provider>
  );
};