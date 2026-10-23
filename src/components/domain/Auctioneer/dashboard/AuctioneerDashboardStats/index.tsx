import {
  Package,
  Gavel,
  Trophy,
  Wallet,
} from "lucide-react";
import { auctioneerDashboardStats } from "../../../../../mocks/auctioneer/auctioneer-dashboard.mock";

const icons = {
  lots: Package,
  bids: Gavel,
  finished: Trophy,
  revenue: Wallet,
};

export function AuctioneerDashboardStats() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {auctioneerDashboardStats.map((stat) => {
        const Icon = icons[stat.icon];

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

                <p className="mt-2 text-2xl font-bold tracking-tight">
                  {stat.value}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-accent">
                <Icon size={21} />
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