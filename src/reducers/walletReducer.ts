import type { WalletAction, WalletState } from "../models/Wallet";

export const initialStateWallet: WalletState = {
  wallet: null,
  transactions: [],
  selectedTransaction: null,
  loadingWallet: false,
  loadingDeposit: false,
  loadingTransactions: false,
  loadingTransaction: false,
  errorWallet: null,
  errorDeposit: null,
  errorTransactions: null,
  errorTransaction: null,
};

export function walletReducer(
  state: WalletState,
  action: WalletAction
): WalletState {
  switch (action.type) {
    case "SET_WALLET":
      return { ...state, wallet: action.payload };

    case "SET_LOADING_WALLET":
      return { ...state, loadingWallet: action.payload };

    case "SET_ERROR_WALLET":
      return { ...state, errorWallet: action.payload };

    case "SET_LOADING_DEPOSIT":
      return { ...state, loadingDeposit: action.payload };

    case "SET_ERROR_DEPOSIT":
      return { ...state, errorDeposit: action.payload };

    case "SET_TRANSACTIONS":
      return { ...state, transactions: action.payload };

    case "SET_LOADING_TRANSACTIONS":
      return { ...state, loadingTransactions: action.payload };

    case "SET_ERROR_TRANSACTIONS":
      return { ...state, errorTransactions: action.payload };

    case "SET_SELECTED_TRANSACTION":
      return { ...state, selectedTransaction: action.payload };

    case "SET_LOADING_TRANSACTION":
      return { ...state, loadingTransaction: action.payload };

    case "SET_ERROR_TRANSACTION":
      return { ...state, errorTransaction: action.payload };

    default:
      return state;
  }
}