import { createContext } from "react";
import type { WalletAction, WalletState } from "../../models/Wallet";
import { initialStateWallet } from "../../reducers/walletReducer";

type WalletContextType = {
  stateWallet: WalletState;
  dispatchWallet: (action: WalletAction) => void;
  loadWallet: () => Promise<void>;
  deposit: (amount: number) => Promise<void>;
  loadTransactions: () => Promise<void>;
  loadTransactionById: (id: number) => Promise<void>;
};

export const WalletContext = createContext<WalletContextType>({
  stateWallet: initialStateWallet,
  dispatchWallet: () => undefined,

  loadWallet: async () => {
    throw new Error("loadWallet not implemented");
  },

  deposit: async () => {
    throw new Error("deposit not implemented");
  },

  loadTransactions: async () => {
    throw new Error("loadTransactions not implemented");
  },

  loadTransactionById: async () => {
    throw new Error("loadTransactionById not implemented");
  },
});
