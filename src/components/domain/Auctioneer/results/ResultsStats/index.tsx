import {
  CircleDollarSign,
  Gavel,
  PackageCheck,
  TrendingUp,
} from "lucide-react";
import type { AuctionResult } from "../../../../../mocks/auctioneer/results.mock";

interface ResultsStatsProps {
  results: AuctionResult[];
}

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function ResultsStats({ results }: ResultsStatsProps) {
  const soldLots = results.filter((result) => result.status === "SOLD");

  const totalRevenue = soldLots.reduce(
    (total, result) => total + (result.finalPrice ?? 0),
    0,
  );

  const averagePrice =
    soldLots.length > 0 ? totalRevenue / soldLots.length : 0;

  const totalBids = results.reduce(
    (total, result) => total + result.totalBids,
    0,
  );

  const stats = [
    {
      label: "Lotes encerrados",
      value: String(results.length),
      description: "Total no período consultado",
      icon: Gavel,
    },
    {
      label: "Lotes arrematados",
      value: String(soldLots.length),
      description: "Leilões finalizados com venda",
      icon: PackageCheck,
    },
    {
      label: "Valor final das vendas",
      value: formatCurrency(totalRevenue),
      description: "Soma dos preços finais",
      icon: CircleDollarSign,
    },
    {
      label: "Ticket médio",
      value: formatCurrency(averagePrice),
      description: "Média por lote arrematado",
      icon: TrendingUp,
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
              <div className="min-w-0">
                <p className="text-sm text-text-muted">{stat.label}</p>

                <p className="mt-2 break-words text-2xl font-bold tracking-tight">
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