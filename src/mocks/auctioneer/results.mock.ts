export type AuctionResultStatus = "SOLD" | "UNSOLD";

export interface AuctionResult {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  startingPrice: number;
  finalPrice: number | null;
  totalBids: number;
  startedAt: string;
  endedAt: string;
  status: AuctionResultStatus;
}

export const resultsMock: AuctionResult[] = [
  {
    id: "lot-003",
    title: "Gravura artística",
    imageUrl:
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800",
    category: "Arte gráfica",
    startingPrice: 500,
    finalPrice: 920,
    totalBids: 9,
    startedAt: "2026-10-20T10:00:00",
    endedAt: "2026-10-22T16:00:00",
    status: "SOLD",
  },
  {
    id: "lot-007",
    title: "Pintura de paisagem",
    imageUrl:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800",
    category: "Pintura",
    startingPrice: 1200,
    finalPrice: 1850,
    totalBids: 12,
    startedAt: "2026-10-19T09:00:00",
    endedAt: "2026-10-21T18:00:00",
    status: "SOLD",
  },
  {
    id: "lot-008",
    title: "Escultura decorativa",
    imageUrl:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=800",
    category: "Escultura",
    startingPrice: 2000,
    finalPrice: null,
    totalBids: 0,
    startedAt: "2026-10-18T10:00:00",
    endedAt: "2026-10-20T17:00:00",
    status: "UNSOLD",
  },
  {
    id: "lot-009",
    title: "Composição abstrata",
    imageUrl:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800",
    category: "Arte moderna",
    startingPrice: 900,
    finalPrice: 1450,
    totalBids: 8,
    startedAt: "2026-10-17T11:00:00",
    endedAt: "2026-10-19T19:00:00",
    status: "SOLD",
  },
  {
    id: "lot-010",
    title: "Estudo em arte clássica",
    imageUrl:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800",
    category: "Pintura",
    startingPrice: 750,
    finalPrice: null,
    totalBids: 0,
    startedAt: "2026-10-16T10:00:00",
    endedAt: "2026-10-18T15:00:00",
    status: "UNSOLD",
  },
];