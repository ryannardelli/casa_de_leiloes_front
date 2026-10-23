export type MyBidStatus =
  | "WINNING"
  | "OUTBID"
  | "WON"
  | "LOST";

export interface MyBid {
  id: string;
  lotId: string;
  title: string;
  imageUrl: string;
  category: string;
  myHighestBid: number;
  currentBid: number;
  totalBids: number;
  endsAt: string;
  status: MyBidStatus;
}

export const myBids: MyBid[] = [
  {
    id: "bid-1",
    lotId: "lot-1",
    title: "Pintura clássica a óleo",
    imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600",
    category: "Pintura",
    myHighestBid: 2450,
    currentBid: 2450,
    totalBids: 18,
    endsAt: "Hoje, 18:30",
    status: "WINNING",
  },
  {
    id: "bid-2",
    lotId: "lot-2",
    title: "Escultura decorativa",
    imageUrl: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=600",
    category: "Escultura",
    myHighestBid: 1500,
    currentBid: 1800,
    totalBids: 12,
    endsAt: "Hoje, 20:00",
    status: "OUTBID",
  },
  {
    id: "bid-3",
    lotId: "lot-3",
    title: "Gravura artística",
    imageUrl: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=600",
    category: "Arte gráfica",
    myHighestBid: 920,
    currentBid: 920,
    totalBids: 9,
    endsAt: "Encerrado",
    status: "WON",
  },
  {
    id: "bid-4",
    lotId: "lot-4",
    title: "Obra abstrata contemporânea",
    imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600",
    category: "Arte moderna",
    myHighestBid: 700,
    currentBid: 950,
    totalBids: 15,
    endsAt: "Encerrado",
    status: "LOST",
  },
];