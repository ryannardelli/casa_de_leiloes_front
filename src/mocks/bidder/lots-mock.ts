export type LotStatus = "live" | "scheduled" | "ended" | "cancelled";

export interface Lot {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  status: LotStatus;
  currentBid: number;
  minimumBid: number;
  bidsCount: number;
  endsAt?: string;
  startsAt?: string;
}

export const lots: Lot[] = [
  {
    id: 1,
    title: "Relógio clássico de luxo",
    description: "Relógio de pulso em excelente estado de conservação.",
    image: "/images/lot-watch.jpg",
    category: "Relógios",
    status: "live",
    currentBid: 4250,
    minimumBid: 4500,
    bidsCount: 18,
    endsAt: "12 min",
  },
  {
    id: 2,
    title: "Automóvel sedan 2022",
    description: "Veículo seminovo, com documentação disponível.",
    image: "/images/lot-car.jpg",
    category: "Veículos",
    status: "scheduled",
    currentBid: 32000,
    minimumBid: 35000,
    bidsCount: 0,
    startsAt: "Hoje, 18:00",
  },
  {
    id: 3,
    title: "Escultura decorativa",
    description: "Peça artística com acabamento exclusivo.",
    image: "/images/lot-sculpture.jpg",
    category: "Arte",
    status: "ended",
    currentBid: 1800,
    minimumBid: 1800,
    bidsCount: 12,
  },
];