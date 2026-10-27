
import type { Award } from "../models/Award";
import { userAuthentication } from "./auth";

const API_URL = "/api/awards";

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
      errorData?.message ?? "Erro ao realizar operação de arremate."
    );
  }

  if (res.status === 204) {
    return undefined as T;
  }

  return res.json() as Promise<T>;
}

export async function getMyAwards(): Promise<Award[]> {
  const headers = await getAuthHeaders();

  const res = await fetch(`${API_URL}/me`, {
    method: "GET",
    headers,
  });

  return handleResponse<Award[]>(res);
}

export async function getAwardById(
  lotId: number
): Promise<Award> {
  const headers = await getAuthHeaders();

  const res = await fetch(`${API_URL}/${lotId}`, {
    method: "GET",
    headers,
  });

  return handleResponse<Award>(res);
}

export async function closeLotAward(
  lotId: number
): Promise<Award> {
  const headers = await getAuthHeaders();

  const res = await fetch(`${API_URL}/lots/${lotId}/close`, {
    method: "POST",
    headers,
  });

  return handleResponse<Award>(res);
}