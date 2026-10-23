import {
  Package,
  Gavel,
  Trophy,
  Wallet,
} from "lucide-react";

export const dashboardStats = [
  {
    label: "Lotes ativos",
    value: "12",
    change: "+2 este mês",
    icon: Package,
  },
  {
    label: "Lances recebidos",
    value: "248",
    change: "+18,5% vs. mês anterior",
    icon: Gavel,
  },
  {
    label: "Arremates concluídos",
    value: "36",
    change: "8 aguardando conclusão",
    icon: Trophy,
  },
  {
    label: "Valor arrecadado",
    value: "R$ 48.750",
    change: "+12,8% vs. mês anterior",
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