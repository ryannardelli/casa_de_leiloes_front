export interface Wallet {
  total: number | string;
  committed: number | string;
  available: number | string;
}

export interface WalletTransaction {
  id: number;
  type: string;
  amount: number | string;
  createdAt: string;
}

export type WalletState = {
  wallet: Wallet | null;
  transactions: WalletTransaction[];
  selectedTransaction: WalletTransaction | null;

  loadingWallet: boolean;
  loadingDeposit: boolean;
  loadingTransactions: boolean;
  loadingTransaction: boolean;

  errorWallet: string | null;
  errorDeposit: string | null;
  errorTransactions: string | null;
  errorTransaction: string | null;
};

export type WalletAction =
  | { type: "SET_WALLET"; payload: Wallet }
  | { type: "SET_LOADING_WALLET"; payload: boolean }
  | { type: "SET_ERROR_WALLET"; payload: string | null }
  | { type: "SET_LOADING_DEPOSIT"; payload: boolean }
  | { type: "SET_ERROR_DEPOSIT"; payload: string | null }
  | { type: "SET_TRANSACTIONS"; payload: WalletTransaction[] }
  | { type: "SET_LOADING_TRANSACTIONS"; payload: boolean }
  | { type: "SET_ERROR_TRANSACTIONS"; payload: string | null }
  | {
      type: "SET_SELECTED_TRANSACTION";
      payload: WalletTransaction | null;
    }
  | { type: "SET_LOADING_TRANSACTION"; payload: boolean }
  | { type: "SET_ERROR_TRANSACTION"; payload: string | null };
