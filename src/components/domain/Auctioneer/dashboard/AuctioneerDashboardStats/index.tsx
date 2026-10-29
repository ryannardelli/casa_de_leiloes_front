import {
Package,
Gavel,
Trophy,
Wallet,
} from "lucide-react";
import { useDashboard } from "../../../../../hooks/useDashboard";
import { StatCard } from "../../../Bidder/dashboard/StatCard";
import { DashboardStatsSkeleton } from "../../../../ui/shared/Loading/auctioneer/dashboard/DashboardStatsSkeleton";

export function AuctioneerDashboardStats() {
const { stateDashboard } = useDashboard();

const {
    auctioneerStats,
    loadingAuctioneerStats,
    errorAuctioneerStats,
} = stateDashboard;

const icons = {
    lots: Package,
    bids: Gavel,
    finished: Trophy,
    revenue: Wallet,
};

const dashboardStats = auctioneerStats
    ? [
          {
              label: "Lotes ativos",
              value: String(auctioneerStats.activeLots),
              change: "Lotes disponíveis ou em andamento",
              icon: icons.lots,
          },
          {
              label: "Lances recebidos",
              value: String(auctioneerStats.totalBids),
              change: "Lances recebidos nos seus lotes",
              icon: icons.bids,
          },
          {
              label: "Leilões encerrados",
              value: String(auctioneerStats.closedAuctions),
              change: "Lotes finalizados",
              icon: icons.finished,
          },
          {
              label: "Total arrecadado",
              value: auctioneerStats.totalAmountRaised.toLocaleString(
                  "pt-BR",
                  {
                      style: "currency",
                      currency: "BRL",
                  }
              ),
              change: "Valor total dos arremates",
              icon: icons.revenue,
          },
      ]
    : [];

return (
    <section
        aria-label="Indicadores do leiloeiro"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
    >
        {loadingAuctioneerStats ? (
            Array.from({ length: 4 }).map((_, index) => (
                <DashboardStatsSkeleton key={index} />
            ))
        ) : errorAuctioneerStats ? (
            <p className="col-span-full text-sm text-red-500">
                {errorAuctioneerStats}
            </p>
        ) : (
            dashboardStats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
            ))
        )}
    </section>
);

}