import {
  Gavel,
  TrendingUp,
  Trophy,
  Clock3,
} from "lucide-react";
import { myBids } from "../../../../../mocks/bidder/myBids.mock";


const stats = [
  {
    label: "Leilões participando",
    icon: Gavel,
    count: myBids.filter(
      (bid) => bid.status === "WINNING" || bid.status === "OUTBID",
    ).length,
  },
  {
    label: "Liderando",
    icon: TrendingUp,
    count: myBids.filter((bid) => bid.status === "WINNING").length,
  },
  {
    label: "Arremates ganhos",
    icon: Trophy,
    count: myBids.filter((bid) => bid.status === "WON").length,
  },
  {
    label: "Superados",
    icon: Clock3,
    count: myBids.filter((bid) => bid.status === "OUTBID").length,
  },
];

export function MyBidsStats() {
  return (
    <section
      aria-label="Resumo dos meus lances"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
    >
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <article
            key={stat.label}
            className="rounded-2xl border border-border bg-surface p-5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-accent">
              <Icon size={20} />
            </div>

            <p className="mt-4 text-sm text-text-muted">
              {stat.label}
            </p>

            <p className="mt-1 text-2xl font-bold">
              {stat.count}
            </p>
          </article>
        );
      })}
    </section>
  );
}