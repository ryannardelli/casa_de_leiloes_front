
import type { Wallet, WalletTransaction } from "../models/Wallet";
import { userAuthentication } from "./auth";

const API_URL = "/api/wallet";

export async function getWallet(): Promise<Wallet> {
  const token = userAuthentication.getTokenFromStorage();

  const res = await fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    throw new Error(errorData?.message ?? "Erro ao consultar carteira.");
  }

  return res.json();
}

export async function createDeposit(
  amount: number
): Promise<WalletTransaction> {
  const token = userAuthentication.getTokenFromStorage();

  const res = await fetch(`${API_URL}/deposits`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ amount }),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    throw new Error(errorData?.message ?? "Erro ao realizar depósito.");
  }

  return res.json();
}

export async function getWalletTransactions(): Promise<WalletTransaction[]> {
  const token = userAuthentication.getTokenFromStorage();

  const res = await fetch(`${API_URL}/transactions`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    throw new Error(errorData?.message ?? "Erro ao consultar transações.");
  }

  return res.json();
}

export async function getWalletTransactionById(
  id: number
): Promise<WalletTransaction> {
  const token = userAuthentication.getTokenFromStorage();

  const res = await fetch(`${API_URL}/transactions/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    throw new Error(
      errorData?.message ?? "Erro ao consultar transação."
    );
  }

  return res.json();
}
