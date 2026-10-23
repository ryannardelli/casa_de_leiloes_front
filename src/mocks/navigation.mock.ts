import {
  LayoutDashboard,
  Gavel,
  Package,
  PlusCircle,
  Wallet,
  Trophy,
  History,
  UserRound,
  type LucideIcon,
} from "lucide-react";

export type UserRole = "AUCTIONEER" | "BIDDER";

export interface MenuItem {
  label: string;
  path: string;
  icon: LucideIcon;
}

export interface ProfileMenu {
  role: UserRole;
  label: string;
  description: string;
  items: MenuItem[];
}

export const profileMenus: Record<UserRole, ProfileMenu> = {
  AUCTIONEER: {
    role: "AUCTIONEER",
    label: "Leiloeiro",
    description: "Gerencie seus lotes e acompanhe seus resultados.",
    items: [
      {
        label: "Visão geral",
        path: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        label: "Meus lotes",
        path: "/dashboard/lots",
        icon: Package,
      },
      {
        label: "Criar lote",
        path: "/dashboard/lots/new",
        icon: PlusCircle,
      },
      {
        label: "Leilões ativos",
        path: "/dashboard/active-auctions",
        icon: Gavel,
      },
      {
        label: "Resultados",
        path: "/dashboard/results",
        icon: History,
      },
      {
        label: "Meu perfil",
        path: "/dashboard/profile",
        icon: UserRound,
      },
    ],
  },

  BIDDER: {
    role: "BIDDER",
    label: "Licitante",
    description: "Participe dos leilões e acompanhe seus lances.",
    items: [
      {
        label: "Visão geral",
        path: "/dashboard",
        icon: LayoutDashboard,
      },
      
      {
        label: "Meus lances",
        path: "/dashboard/my-bids",
        icon: Gavel,
      },
      {
        label: "Minha carteira",
        path: "/dashboard/wallet",
        icon: Wallet,
      },
      {
        label: "Meus arremates",
        path: "/dashboard/my-wins",
        icon: Trophy,
      },

      {
        label: "Meu perfil",
        path: "/dashboard/profile",
        icon: UserRound,
      },
    ],
  },
};
