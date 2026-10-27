import type {
  Bid,
  CreateBidResponse,
} from "../models/Bid";
import type { LiveRoom } from "../models/LiveRoom";

import { userAuthentication } from "./auth";

const API_URL = "/api/bids";

async function getAuthHeaders(): Promise<HeadersInit> {
  const token = userAuthentication.getTokenFromStorage();

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const errorData = await res.json().catch(() => null);

    throw new Error(
      errorData?.message ?? "Erro ao realizar operação de lance."
    );
  }

  return res.json() as Promise<T>;
}

export async function createBid(
  lotId: number,
  amount: number
): Promise<CreateBidResponse> {
  const headers = await getAuthHeaders();

  const res = await fetch(`${API_URL}/lots/${lotId}`, {
    method: "POST",
    headers,
    body: JSON.stringify({ amount }),
  });

  return handleResponse<CreateBidResponse>(res);
}

export async function getLotBids(
  lotId: number
): Promise<Bid[]> {
  const headers = await getAuthHeaders();

  const res = await fetch(`${API_URL}/lots/${lotId}`, {
    method: "GET",
    headers,
  });

  return handleResponse<Bid[]>(res);
}

export async function getLotById(
  id: number
): Promise<Bid> {
  const response = await fetch(`${API_URL}/lots/${id}`);

  if (!response.ok) {
    throw new Error("Erro ao buscar os detalhes do lote.");
  }

  return response.json() as Promise<Bid>;
}

export async function getMyBids(): Promise<Bid[]> {
  const headers = await getAuthHeaders();

  const res = await fetch(`${API_URL}/bidder/my-bids`, {
    method: "GET",
    headers,
  });

  return handleResponse<Bid[]>(res);
}

export async function getLiveRoom(
  lotId: number
): Promise<LiveRoom> {
  const headers = await getAuthHeaders();

  const res = await fetch(`${API_URL}/lots/${lotId}/live`, {
    method: "GET",
    headers,
  });

  return handleResponse<LiveRoom>(res);
}
