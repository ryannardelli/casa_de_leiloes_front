import { Gavel, Package, CalendarClock, Trophy } from "lucide-react";
import { myLots } from "../../../../../mocks/auctioneer/my-lots.mock";

export function MyLotsStats() {
  const stats = [
    {
      label: "Total de lotes",
      value: myLots.length,
      description: "Lotes cadastrados",
      icon: Package,
    },
    {
      label: "Em andamento",
      value: myLots.filter((lot) => lot.status === "LIVE").length,
      description: "Recebendo lances",
      icon: Gavel,
    },
    {
      label: "Agendados",
      value: myLots.filter((lot) => lot.status === "SCHEDULED").length,
      description: "Aguardando início",
      icon: CalendarClock,
    },
    {
      label: "Encerrados",
      value: myLots.filter((lot) => lot.status === "ENDED").length,
      description: "Leilões finalizados",
      icon: Trophy,
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
                <p className="text-sm text-text-muted">
                  {stat.label}
                </p>

                <p className="mt-2 text-2xl font-bold tracking-tight">
                  {stat.value}
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-accent">
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