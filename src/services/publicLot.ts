import type { PublicLot } from "../models/PublicLot";

const API_URL = "/api/public-lots/lots";


export const publicLotsService = {
  async getLots(status?: string): Promise<PublicLot[]> {
    try {
      const url = status
        ? `${API_URL}?status=${status}`
        : API_URL;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Erro ao buscar os lotes públicos.");
      }

      return await response.json();
    } catch (error) {
      console.error("Erro ao listar lotes públicos:", error);
      throw error;
    }
  },

  async getLotById(id: number): Promise<PublicLot> {
    try {
      const response = await fetch(`${API_URL}/${id}`);

      if (!response.ok) {
        throw new Error("Erro ao buscar os detalhes do lote.");
      }

      return await response.json();
    } catch (error) {
      console.error("Erro ao consultar lote público:", error);
      throw error;
    }
  },
};
