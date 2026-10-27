import {
  Gavel,
  Trophy,
  Wallet,
  Radio,
} from "lucide-react";

export const dashboardStats = [
  {
    label: "Lances realizados",
    value: "24",
    change: "Lances enviados por você",
    icon: Gavel,
  },
  {
    label: "Leilões em andamento",
    value: "5",
    change: "Leilões com sua participação",
    icon: Radio,
  },
  {
    label: "Lotes arrematados",
    value: "3",
    change: "Arrematações conquistadas",
    icon: Trophy,
  },
  {
    label: "Valor arrematado",
    value: "R$ 8.450,00",
    change: "Soma dos valores dos lotes ganhos",
    icon: Wallet,
  },
];

export const recentLots = [
  {
    id: "LOT-001",
    title: "Pintura clássica a óleo",
    category: "Pintura",
    currentBid: 2450,
    bids: 18,
    status: "Ativo",
    endsAt: "Hoje, 18:30",
  },
  {
    id: "LOT-002",
    title: "Escultura decorativa",
    category: "Escultura",
    currentBid: 1800,
    bids: 12,
    status: "Agendado",
    endsAt: "Amanhã, 14:00",
  },
  {
    id: "LOT-003",
    title: "Gravura artística",
    category: "Arte gráfica",
    currentBid: 920,
    bids: 9,
    status: "Encerrado",
    endsAt: "22 out, 16:00",
  },
];

export const quickActions = [
  {
    label: "Criar lote",
    description: "Cadastre uma nova obra",
    icon: "plus",
    path: "/dashboard/lots/new",
  },
  {
    label: "Leilões ativos",
    description: "Acompanhe os lances",
    icon: "gavel",
    path: "/dashboard/active-auctions",
  },
  {
    label: "Consultar resultados",
    description: "Veja os lotes encerrados",
    icon: "trophy",
    path: "/dashboard/results",
  },
];