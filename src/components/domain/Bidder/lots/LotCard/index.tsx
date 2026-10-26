import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Radio,
  Users,
} from "lucide-react";
import type { Lot } from "../../../../../mocks/bidder/lots-mock";

interface LotCardProps {
  lot: Lot;
}

const statusConfig = {
  live: {
    label: "Ao vivo",
    className: "bg-accent/10 text-accent",
  },
  scheduled: {
    label: "Agendado",
    className: "bg-gold/15 text-gold",
  },
  ended: {
    label: "Encerrado",
    className: "bg-muted text-text-muted",
  },
  cancelled: {
    label: "Cancelado",
    className: "bg-muted text-text-muted",
  },
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
  }).format(value);

export function LotCard({ lot }: LotCardProps) {
  if (lot.status === "cancelled") return null;

  const status = statusConfig[lot.status];

  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={lot.image}
          alt={lot.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <span
          className={`absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold ${status.className}`}
        >
          {lot.status === "live" && (
            <Radio size={13} />
          )}
          {lot.status === "scheduled" && (
            <CalendarDays size={13} />
          )}
          {lot.status === "ended" && (
            <Clock3 size={13} />
          )}
          {status.label}
        </span>

        <span className="absolute bottom-3 right-3 rounded-lg bg-background/90 px-3 py-1.5 text-xs font-medium text-text backdrop-blur">
          {lot.category}
        </span>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h3 className="line-clamp-1 text-lg font-semibold transition-colors group-hover:text-accent">
            {lot.title}
          </h3>
          <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-relaxed text-text-muted">
            {lot.description}
          </p>
        </div>

        <div className="rounded-xl bg-muted/60 p-4">
          <p className="text-xs text-text-muted">
            {lot.status === "scheduled"
              ? "Lance inicial"
              : lot.status === "ended"
                ? "Lance final"
                : "Lance atual"}
          </p>

          <p className="mt-1 text-xl font-bold">
            {formatCurrency(
              lot.status === "scheduled"
                ? lot.minimumBid
                : lot.currentBid
            )}
          </p>

          <div className="mt-3 flex items-center justify-between gap-2 text-xs text-text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Users size={14} />
              {lot.bidsCount} lances
            </span>

            {lot.status === "live" && lot.endsAt && (
              <span className="inline-flex items-center gap-1.5">
                <Clock3 size={14} />
                {lot.endsAt}
              </span>
            )}

            {lot.status === "scheduled" && lot.startsAt && (
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays size={14} />
                {lot.startsAt}
              </span>
            )}
          </div>
        </div>

        <button
          onClick={() => {
            window.location.href = `/lots/${lot.id}`;
          }}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-semibold transition-colors hover:border-accent hover:bg-accent hover:text-white"
        >
          {lot.status === "live"
            ? "Acompanhar lote"
            : lot.status === "scheduled"
              ? "Ver detalhes"
              : "Consultar resultado"}
          <ArrowUpRight size={16} />
        </button>
      </div>
    </article>
  );
}
