export interface AuctioneerDashboardStats {
  label: string;
  value: string;
  description: string;
  icon: "lots" | "bids" | "finished" | "revenue";
}

export interface AuctioneerLot {
  id: string;
  title: string;
  category: string;
  currentBid: number;
  totalBids: number;
  endsAt: string;
  status: "LIVE" | "SCHEDULED" | "ENDED";
}

export const auctioneerDashboardStats: AuctioneerDashboardStats[] = [
  {
    label: "Lotes ativos",
    value: "12",
    description: "Disponíveis ou em andamento",
    icon: "lots",
  },
  {
    label: "Lances recebidos",
    value: "248",
    description: "Nos seus lotes",
    icon: "bids",
  },
  {
    label: "Leilões encerrados",
    value: "36",
    description: "Lotes finalizados",
    icon: "finished",
  },
  {
    label: "Total arrecadado",
    value: "R$ 48.750",
    description: "Valor final dos arremates",
    icon: "revenue",
  },
];

export const auctioneerRecentLots: AuctioneerLot[] = [
  {
    id: "lot-001",
    title: "Pintura clássica a óleo",
    category: "Pintura",
    currentBid: 2450,
    totalBids: 18,
    endsAt: "Hoje, 18:30",
    status: "LIVE",
  },
  {
    id: "lot-002",
    title: "Escultura decorativa",
    category: "Escultura",
    currentBid: 1800,
    totalBids: 12,
    endsAt: "Amanhã, 14:00",
    status: "SCHEDULED",
  },
  {
    id: "lot-003",
    title: "Gravura artística",
    category: "Arte gráfica",
    currentBid: 920,
    totalBids: 9,
    endsAt: "22 out. 2026",
    status: "ENDED",
  },
];