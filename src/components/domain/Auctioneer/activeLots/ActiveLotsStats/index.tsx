import { CalendarClock, Gavel, Package, TrendingUp } from "lucide-react";
import type { ActiveLot } from "../../../../../mocks/auctioneer/active-lots.mock";

interface ActiveLotsStatsProps {
  lots: ActiveLot[];
}

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
  });
}

export function ActiveLotsStats({ lots }: ActiveLotsStatsProps) {
  const bidsToday = lots.reduce((total, lot) => total + lot.totalBids, 0);

  const highestBid = lots.reduce(
    (highest, lot) => Math.max(highest, lot.currentBid),
    0,
  );

  const today = new Date();
  const endingToday = lots.filter((lot) => {
    const endDate = new Date(lot.endsAt);

    return (
      endDate.getFullYear() === today.getFullYear() &&
      endDate.getMonth() === today.getMonth() &&
      endDate.getDate() === today.getDate()
    );
  }).length;

  const stats = [
    {
      label: "Lotes ativos",
      value: String(lots.length),
      description: "Recebendo lances",
      icon: Package,
    },
    {
      label: "Lances recebidos",
      value: String(bidsToday),
      description: "Total nos lotes ativos",
      icon: Gavel,
    },
    {
      label: "Maior lance atual",
      value: formatCurrency(highestBid),
      description: "Entre seus lotes ativos",
      icon: TrendingUp,
    },
    {
      label: "Encerram hoje",
      value: String(endingToday),
      description: "Lotes com término hoje",
      icon: CalendarClock,
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <article
            key={stat.label}
            className="rounded-2xl border border-border bg-surface p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm text-text-muted">{stat.label}</p>

                <p className="mt-2 text-2xl font-bold tracking-tight">
                  {stat.value}
                </p>
              </div>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted text-accent">
                <Icon size={20} />
              </div>
            </div>

            <p className="mt-3 text-xs text-text-muted">
              {stat.description}
            </p>
          </article>
        );
      })}
    </section>
  );
}