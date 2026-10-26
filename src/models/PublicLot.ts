export type PublicLotStatus =
  | "LIVE"
  | "SCHEDULED"
  | "ENDED"
  | "CANCELLED";

export interface PublicLot {
  id: number;
  auctioneerId: number;
  externalItemId: string;
  title: string;
  description: string;
  imageUrl: string;
  currentPrice: string;
  startingPrice: string;
  minimumIncrement: string;
  finalPrice: string | null;
  startAt: string;
  endAt: string;
  status: PublicLotStatus;
  settledAt: string | null;
  winnerId: number | null;
  createdAt: string;
  updatedAt: string;
  attributes: {
    artist?: string;
    culture?: string;
    department?: string;
    medium?: string;
    objectDate?: string;
    [key: string]: unknown;
  };
}