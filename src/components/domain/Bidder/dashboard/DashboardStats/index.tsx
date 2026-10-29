import {
    Gavel,
    CalendarClock,
    Trophy,
    Wallet,
} from "lucide-react";

import { useDashboard } from "../../../../../hooks/useDashboard";
import { StatCard } from "../StatCard";
import { DashboardStatsSkeleton } from "../../../../ui/shared/Loading/bidder/dashboard/DashboardStatsSkeleton";

export function DashboardStats() {
    const { stateDashboard } = useDashboard();

    const {
        bidderStats,
        loadingBidderStats,
        errorBidderStats,
    } = stateDashboard;

    const dashboardStats = bidderStats
        ? [
              {
                  label: "Lances realizados",
                  value: String(bidderStats.totalBids),
                  change: "Lances enviados por você",
                  icon: Gavel,
              },
              {
                  label: "Leilões em andamento",
                  value: String(bidderStats.ongoingAuctions),
                  change: "Leilões com sua participação",
                  icon: CalendarClock,
              },
              {
                  label: "Lotes arrematados",
                  value: String(bidderStats.wonLots),
                  change: "Arrematações conquistadas",
                  icon: Trophy,
              },
              {
                  label: "Valor arrematado",
                  value: bidderStats.totalAmountWon.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                  }),
                  change: "Valor total das arrematações",
                  icon: Wallet,
              },
          ]
        : [];

    return (
        <section
            aria-label="Indicadores do negócio"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
            {loadingBidderStats ? (
                 Array.from({ length: 4 }).map((_, index) => (
                    <DashboardStatsSkeleton key={index} />
                ))
            ) : errorBidderStats ? (
                <p className="col-span-full text-sm text-red-500">
                    {errorBidderStats}
                </p>
            ) : (
                dashboardStats.map((stat) => (
                    <StatCard key={stat.label} {...stat} />
                ))
            )}
        </section>
    );
}