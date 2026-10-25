import {
  ArrowDownToLine,
  LockKeyhole,
  TrendingUp,
} from "lucide-react";
import { formatCurrency } from "../../../../../utils/formatCurrency";


interface WalletStatsProps {
  availableBalance: number;
  committedBalance: number;
}

export function WalletStats({
  availableBalance,
  committedBalance,
}: WalletStatsProps) {
   
  const stats = [
    {
      label: "Saldo disponível",
      value: formatCurrency(availableBalance),
      description: "Disponível para novos lances",
      icon: TrendingUp,
    },
    {
      label: "Saldo comprometido",
      value: formatCurrency(committedBalance),
      description: "Reservado em lances ativos",
      icon: LockKeyhole,
    },
    {
      label: "Poder de lance",
      value: formatCurrency(availableBalance),
      description: "Valor máximo para um novo lance",
      icon: ArrowDownToLine,
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
              <div>
                <p className="text-sm text-text-muted">
                  {stat.label}
                </p>

                <p className="mt-2 text-xl font-bold tracking-tight">
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