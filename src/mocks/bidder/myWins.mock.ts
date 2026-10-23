export type MyWinStatus = "CONFIRMED" | "PENDING";

export interface MyWin {
  id: string;
  lotId: string;
  title: string;
  imageUrl: string;
  category: string;
  finalPrice: number;
  totalBids: number;
  endedAt: string;
  status: MyWinStatus;
}

export const myWins: MyWin[] = [
  {
    id: "win-1",
    lotId: "lot-3",
    title: "Gravura artística",
    imageUrl:
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=600",
    category: "Arte gráfica",
    finalPrice: 920,
    totalBids: 9,
    endedAt: "2026-10-22T16:00:00",
    status: "CONFIRMED",
  },
  {
    id: "win-2",
    lotId: "lot-5",
    title: "Composição abstrata",
    imageUrl:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600",
    category: "Arte moderna",
    finalPrice: 1750,
    totalBids: 14,
    endedAt: "2026-10-20T18:30:00",
    status: "PENDING",
  },
  {
    id: "win-3",
    lotId: "lot-8",
    title: "Pintura em tons clássicos",
    imageUrl:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600",
    category: "Pintura",
    finalPrice: 2400,
    totalBids: 21,
    endedAt: "2026-10-18T14:00:00",
    status: "CONFIRMED",
  },
];