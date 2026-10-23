export type WalletTransactionType =
  | "DEPOSIT"
  | "BID_RESERVED"
  | "BID_RELEASED";

export interface WalletTransaction {
  id: string;
  type: WalletTransactionType;
  description: string;
  amount: number;
  date: string;
}

export const initialWallet = {
  availableBalance: 2500,
  committedBalance: 750,
};

export const initialTransactions: WalletTransaction[] = [
  {
    id: "transaction-1",
    type: "DEPOSIT",
    description: "Depósito simulado",
    amount: 2000,
    date: "2026-10-22T14:30:00",
  },
  {
    id: "transaction-2",
    type: "BID_RESERVED",
    description: "Valor reservado para um lance",
    amount: -750,
    date: "2026-10-22T15:10:00",
  },
  {
    id: "transaction-3",
    type: "DEPOSIT",
    description: "Depósito simulado",
    amount: 1250,
    date: "2026-10-21T10:00:00",
  },
];