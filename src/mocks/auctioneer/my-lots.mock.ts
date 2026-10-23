export type MyLotStatus =
  | "LIVE"
  | "SCHEDULED"
  | "ENDED"
  | "CANCELED";

export interface MyLot {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  startingPrice: number;
  currentBid: number;
  totalBids: number;
  startsAt: string;
  endsAt: string;
  status: MyLotStatus;
}

export const myLots: MyLot[] = [
  {
    id: "lot-001",
    title: "Pintura clássica a óleo",
    imageUrl:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600",
    category: "Pintura",
    startingPrice: 1500,
    currentBid: 2450,
    totalBids: 18,
    startsAt: "2026-10-22T10:00:00",
    endsAt: "2026-10-23T18:30:00",
    status: "LIVE",
  },
  {
    id: "lot-002",
    title: "Escultura decorativa",
    imageUrl:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=600",
    category: "Escultura",
    startingPrice: 1200,
    currentBid: 1200,
    totalBids: 0,
    startsAt: "2026-10-25T14:00:00",
    endsAt: "2026-10-26T18:00:00",
    status: "SCHEDULED",
  },
  {
    id: "lot-003",
    title: "Gravura artística",
    imageUrl:
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=600",
    category: "Arte gráfica",
    startingPrice: 500,
    currentBid: 920,
    totalBids: 9,
    startsAt: "2026-10-20T10:00:00",
    endsAt: "2026-10-22T16:00:00",
    status: "ENDED",
  },
  {
    id: "lot-004",
    title: "Composição abstrata",
    imageUrl:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600",
    category: "Arte moderna",
    startingPrice: 700,
    currentBid: 700,
    totalBids: 0,
    startsAt: "2026-10-27T10:00:00",
    endsAt: "2026-10-28T18:00:00",
    status: "SCHEDULED",
  },
];