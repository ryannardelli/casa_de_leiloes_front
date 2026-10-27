import { CalendarDays, Landmark } from "lucide-react";
import type { FeaturedWorks } from "../../../../../models/PublicCollection";

interface HighlightCardProps {
  item: FeaturedWorks;
}

export function HighlightCard({ item }: HighlightCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-muted p-5">
        <img
          src={item.imageUrl}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full border border-border bg-surface/90 px-3 py-1 text-xs font-medium text-text">
          {item.category || item.department}
        </span>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Obra em destaque
          </p>

          <h2 className="text-lg font-semibold leading-snug text-text">
            {item.title}
          </h2>

          <p className="mt-1 text-sm text-text-muted">{item.artist}</p>
        </div>

        <div className="flex items-center justify-between border-t border-border pt-4 text-sm text-text-muted">
          <span className="flex items-center gap-2">
            <CalendarDays size={16} className="text-gold" />
            {item.objectDate || "Data desconhecida"}
          </span>
        </div>

        <div className="flex items-start gap-2 text-sm text-text-muted">
          <Landmark size={16} className="mt-0.5 shrink-0 text-gold" />
          <span>{item.department}</span>
        </div>
      </div>
    </article>
  );
}