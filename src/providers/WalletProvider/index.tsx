import {
  useEffect,
  useReducer,
  type ReactNode,
  useCallback,
} from "react";
import { WalletContext } from "./WalletContext";
import {
  getWallet,
  createDeposit,
  getWalletTransactions,
  getWalletTransactionById,
} from "../../services/wallet";
import { useAuth } from "../../hooks/useAuth";
import {
  initialStateWallet,
  walletReducer,
} from "../../reducers/walletReducer";

type WalletProviderProps = {
  children: ReactNode;
};

export const WalletProvider = ({ children }: WalletProviderProps) => {
  const [stateWallet, dispatchWallet] = useReducer(
    walletReducer,
    initialStateWallet
  );

  const { state } = useAuth();

  const loadWallet = useCallback(async () => {
    try {
      dispatchWallet({ type: "SET_LOADING_WALLET", payload: true });
      dispatchWallet({ type: "SET_ERROR_WALLET", payload: null });

      const wallet = await getWallet();

      dispatchWallet({ type: "SET_WALLET", payload: wallet });
    } catch (error) {
      dispatchWallet({
        type: "SET_ERROR_WALLET",
        payload: error instanceof Error ? error.message : "Erro ao carregar carteira",
      });
      console.error(error);
    } finally {
      dispatchWallet({ type: "SET_LOADING_WALLET", payload: false });
    }
  }, []);

  const loadTransactions = useCallback(async () => {
    try {
      dispatchWallet({
        type: "SET_LOADING_TRANSACTIONS",
        payload: true,
      });
      dispatchWallet({ type: "SET_ERROR_TRANSACTIONS", payload: null });

      const transactions = await getWalletTransactions();

      dispatchWallet({
        type: "SET_TRANSACTIONS",
        payload: transactions,
      });
    } catch (error) {
      dispatchWallet({
        type: "SET_ERROR_TRANSACTIONS",
        payload: error instanceof Error ? error.message : "Erro ao carregar transações",
      });
      console.error(error);
    } finally {
      dispatchWallet({
        type: "SET_LOADING_TRANSACTIONS",
        payload: false,
      });
    }
  }, []);

  const deposit = useCallback(async (amount: number) => {
  try {
    dispatchWallet({ type: "SET_LOADING_DEPOSIT", payload: true });
    dispatchWallet({ type: "SET_ERROR_DEPOSIT", payload: null });

    const response = await createDeposit(amount);

    await Promise.all([loadWallet(), loadTransactions()]);

    return response;
  } catch (error) {
    dispatchWallet({
      type: "SET_ERROR_DEPOSIT",
      payload:
        error instanceof Error
          ? error.message
          : "Erro ao realizar depósito",
    });

    console.error(error);
    throw error;
  } finally {
    dispatchWallet({ type: "SET_LOADING_DEPOSIT", payload: false });
  }
}, [loadWallet, loadTransactions]);

  const loadTransactionById = useCallback(async (id: number) => {
    try {
      dispatchWallet({
        type: "SET_LOADING_TRANSACTION",
        payload: true,
      });
      dispatchWallet({ type: "SET_ERROR_TRANSACTION", payload: null });

      const transaction = await getWalletTransactionById(id);

      dispatchWallet({
        type: "SET_SELECTED_TRANSACTION",
        payload: transaction,
      });
    } catch (error) {
      dispatchWallet({
        type: "SET_ERROR_TRANSACTION",
        payload: error instanceof Error ? error.message : "Erro ao carregar transação",
      });
      console.error(error);
    } finally {
      dispatchWallet({
        type: "SET_LOADING_TRANSACTION",
        payload: false,
      });
    }
  }, []);

  useEffect(() => {
    if (state.loading || !state.user) return;

    loadWallet();
    loadTransactions();
  }, [state.loading, state.user, loadWallet, loadTransactions]);

  return (
    <WalletContext.Provider
      value={{
        stateWallet,
        dispatchWallet,
        loadWallet,
        deposit,
        loadTransactions,
        loadTransactionById,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
