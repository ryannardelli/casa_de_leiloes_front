import {
  useCallback,
  useEffect,
  useReducer,
  type ReactNode,
} from "react";

import { AwardsContext } from "./AwardsContext";

import { useAuth } from "../../hooks/useAuth";

import {
  initialStateAwards,
  awardsReducer,
} from "../../reducers/awardsReducer";

import {
  getMyAwards,
  getAwardById as getAwardByIdService,
  closeLotAward as closeLotAwardService,
} from "../../services/awards";

import type { Award } from "../../models/Award";

type AwardsProviderProps = {
  children: ReactNode;
};

export const AwardsProvider = ({
  children,
}: AwardsProviderProps) => {
  const [stateAwards, dispatchAwards] = useReducer(
    awardsReducer,
    initialStateAwards
  );

  const { state } = useAuth();

  const userId = state.user?.id;
  const profileName = state.user?.profile?.name;


  const loadMyAwards = useCallback(
    async (): Promise<Award[]> => {
      try {
        dispatchAwards({
          type: "SET_LOADING_MY_AWARDS",
          payload: true,
        });

        dispatchAwards({
          type: "SET_ERROR_MY_AWARDS",
          payload: null,
        });

        const awards = await getMyAwards();

        dispatchAwards({
          type: "SET_MY_AWARDS",
          payload: awards,
        });

        return awards;
      } catch (error) {
        dispatchAwards({
          type: "SET_ERROR_MY_AWARDS",
          payload:
            error instanceof Error
              ? error.message
              : "Erro ao carregar seus arremates.",
        });

        console.error("Erro ao carregar meus arremates:", error);

        throw error;
      } finally {
        dispatchAwards({
          type: "SET_LOADING_MY_AWARDS",
          payload: false,
        });
      }
    },
    []
  );

  const loadAwardById = useCallback(
    async (lotId: number): Promise<Award> => {
      try {
        dispatchAwards({
          type: "SET_LOADING_AWARD_BY_ID",
          payload: true,
        });

        dispatchAwards({
          type: "SET_ERROR_AWARD_BY_ID",
          payload: null,
        });

        const award = await getAwardByIdService(lotId);

        dispatchAwards({
          type: "SET_SELECTED_AWARD",
          payload: award,
        });

        return award;
      } catch (error) {
        dispatchAwards({
          type: "SET_ERROR_AWARD_BY_ID",
          payload:
            error instanceof Error
              ? error.message
              : "Erro ao carregar os detalhes do arremate.",
        });

        console.error(
          "Erro ao carregar detalhes do arremate:",
          error
        );

        throw error;
      } finally {
        dispatchAwards({
          type: "SET_LOADING_AWARD_BY_ID",
          payload: false,
        });
      }
    },
    []
  );

  const closeLotAward = useCallback(
    async (lotId: number): Promise<Award> => {
      try {
        dispatchAwards({
          type: "SET_LOADING_CLOSE_AWARD",
          payload: true,
        });

        dispatchAwards({
          type: "SET_ERROR_CLOSE_AWARD",
          payload: null,
        });

        const award = await closeLotAwardService(lotId);

        dispatchAwards({
          type: "SET_SELECTED_AWARD",
          payload: award,
        });

        return award;
      } catch (error) {
        dispatchAwards({
          type: "SET_ERROR_CLOSE_AWARD",
          payload:
            error instanceof Error
              ? error.message
              : "Erro ao encerrar o lote e registrar o resultado.",
        });

        console.error(
          "Erro ao encerrar lote e registrar arremate:",
          error
        );

        throw error;
      } finally {
        dispatchAwards({
          type: "SET_LOADING_CLOSE_AWARD",
          payload: false,
        });
      }
    },
    []
  );

  useEffect(() => {
    if (state.loading || !userId) {
      return;
    }

    if (profileName !== "Licitante") {
      return;
    }

    loadMyAwards().catch(() => undefined);
  }, [state.loading, userId, profileName, loadMyAwards]);

  return (
    <AwardsContext.Provider
      value={{
        stateAwards,
        dispatchAwards,
        loadMyAwards,
        loadAwardById,
        closeLotAward,
      }}
    >
      {children}
    </AwardsContext.Provider>
  );
};
