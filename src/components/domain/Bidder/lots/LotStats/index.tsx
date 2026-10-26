import {
  CalendarDays,
  CheckCircle2,
  Radio,
} from "lucide-react";
import type { Lot } from "../../../../../mocks/bidder/lots-mock";

interface LotStatsProps {
  lots: Lot[];
}

export function LotStats({ lots }: LotStatsProps) {
  const stats = [
    {
      title: "Lotes ao vivo",
      value: lots.filter((lot) => lot.status === "live").length,
      description: "Disputas em andamento",
      icon: Radio,
      accent: "text-accent",
    },
    {
      title: "Agendados",
      value: lots.filter((lot) => lot.status === "scheduled").length,
      description: "Aguardando início",
      icon: CalendarDays,
      accent: "text-gold",
    },
    {
      title: "Encerrados",
      value: lots.filter((lot) => lot.status === "ended").length,
      description: "Disputas finalizadas",
      icon: CheckCircle2,
      accent: "text-text-muted",
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map(({ title, value, description, icon: Icon, accent }) => (
        <article
          key={title}
          className="rounded-2xl border border-border bg-surface p-5"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-text-muted">{title}</p>
              <p className="mt-3 text-3xl font-bold">{value}</p>
            </div>

            <div className={`rounded-xl bg-muted p-3 ${accent}`}>
              <Icon size={20} />
            </div>
          </div>

          <p className="mt-4 text-xs text-text-muted">{description}</p>
        </article>
      ))}
    </section>
  );
}