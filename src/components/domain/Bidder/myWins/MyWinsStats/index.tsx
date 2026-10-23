import { Trophy, Wallet, Gavel } from "lucide-react";
import { myWins } from "../../../../../mocks/bidder/myWins.mock";
import { formatCurrency } from "../../../../../utils/formatCurrency";

export function MyWinsStats() {
  const totalValue = myWins.reduce(
    (total, win) => total + win.finalPrice,
    0,
  );

  const confirmedWins = myWins.filter(
    (win) => win.status === "CONFIRMED",
  ).length;

  const pendingWins = myWins.filter(
    (win) => win.status === "PENDING",
  ).length;

  const stats = [
    {
      label: "Total de arremates",
      value: String(myWins.length),
      description: "Lotes conquistados",
      icon: Trophy,
    },
    {
      label: "Valor dos arremates",
      value: formatCurrency(totalValue),
      description: "Soma dos valores finais",
      icon: Wallet,
    },
    {
      label: "Aguardando confirmação",
      value: String(pendingWins),
      description: `${confirmedWins} com status confirmado`,
      icon: Gavel,
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <article
            key={stat.label}
            className="rounded-2xl border border-border bg-surface p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm text-text-muted">
                  {stat.label}
                </p>

                <p className="mt-2 break-words text-xl font-bold tracking-tight">
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