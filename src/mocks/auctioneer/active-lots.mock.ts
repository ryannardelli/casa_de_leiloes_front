export interface ActiveLot {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  startingPrice: number;
  currentBid: number;
  minimumIncrement: number;
  totalBids: number;
  startsAt: string;
  endsAt: string;
}

export const activeLotsMock: ActiveLot[] = [
  {
    id: "lot-001",
    title: "Composição em tons clássicos",
    imageUrl:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800",
    category: "Pintura",
    startingPrice: 1500,
    currentBid: 2450,
    minimumIncrement: 50,
    totalBids: 18,
    startsAt: "2026-10-22T10:00:00",
    endsAt: "2026-10-23T18:30:00",
  },
  {
    id: "lot-002",
    title: "Escultura decorativa",
    imageUrl:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=800",
    category: "Escultura",
    startingPrice: 1200,
    currentBid: 1800,
    minimumIncrement: 100,
    totalBids: 7,
    startsAt: "2026-10-22T14:00:00",
    endsAt: "2026-10-24T20:00:00",
  },
  {
    id: "lot-003",
    title: "Composição abstrata",
    imageUrl:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800",
    category: "Arte moderna",
    startingPrice: 2000,
    currentBid: 3200,
    minimumIncrement: 100,
    totalBids: 24,
    startsAt: "2026-10-21T10:00:00",
    endsAt: "2026-10-24T15:00:00",
  },
  {
    id: "lot-004",
    title: "Estudo de arte gráfica",
    imageUrl:
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800",
    category: "Gravura",
    startingPrice: 700,
    currentBid: 950,
    minimumIncrement: 25,
    totalBids: 10,
    startsAt: "2026-10-22T09:00:00",
    endsAt: "2026-10-25T18:00:00",
  },
];