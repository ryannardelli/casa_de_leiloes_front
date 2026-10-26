import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Radio,
} from "lucide-react";
import type { PublicLot } from "../../../../../models/PublicLot";

interface LotCardProps {
  lot: PublicLot;
}

const statusConfig = {
  LIVE: {
    label: "Ao vivo",
    className: "bg-accent/10 text-accent",
  },
  SCHEDULED: {
    label: "Agendado",
    className: "bg-gold/15 text-gold",
  },
  ENDED: {
    label: "Encerrado",
    className: "bg-muted text-text-muted",
  },
  CANCELLED: {
    label: "Cancelado",
    className: "bg-muted text-text-muted",
  },
};

const formatCurrency = (value: string | number | null) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
  }).format(Number(value ?? 0));

const formatDate = (value: string) =>
  new Date(value).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

export function LotCard({ lot }: LotCardProps) {
const normalizedStatus = lot.status.trim().toUpperCase() as keyof typeof statusConfig;

  if (normalizedStatus === "CANCELLED") return null;

  const status = statusConfig[normalizedStatus];

  if (!status) return null;

  const bidValue =
    normalizedStatus === "SCHEDULED"
      ? lot.startingPrice
      : normalizedStatus === "ENDED"
        ? lot.finalPrice ?? lot.currentPrice
        : lot.currentPrice;

  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={lot.imageUrl}
          alt={lot.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <span
          className={`absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold ${status.className}`}
        >
          {lot.status === "LIVE" && <Radio size={13} />}
          {lot.status === "SCHEDULED" && <CalendarDays size={13} />}
          {lot.status === "ENDED" && <Clock3 size={13} />}
          {status.label}
        </span>

        <span className="absolute bottom-3 right-3 rounded-lg bg-background/90 px-3 py-1.5 text-xs font-medium text-text backdrop-blur">
          {lot.attributes?.department ?? "Leilão"}
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
            {lot.status === "SCHEDULED"
              ? "Lance inicial"
              : lot.status === "ENDED"
                ? "Lance final"
                : "Lance atual"}
          </p>

          <p className="mt-1 text-xl font-bold">
            {formatCurrency(bidValue)}
          </p>

          <div className="mt-3 flex items-center gap-1.5 text-xs text-text-muted">
            {lot.status === "LIVE" ? (
              <>
                <Clock3 size={14} />
                Encerra em {formatDate(lot.endAt)}
              </>
            ) : lot.status === "SCHEDULED" ? (
              <>
                <CalendarDays size={14} />
                Início: {formatDate(lot.startAt)}
              </>
            ) : (
              <>
                <Clock3 size={14} />
                Encerrado em {formatDate(lot.endAt)}
              </>
            )}
          </div>
        </div>

        <button
          onClick={() => {
            window.location.href = `/auctions/${lot.id}`;
          }}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-semibold transition-colors hover:border-accent hover:bg-accent hover:text-white cursor-pointer"
        >
          {lot.status === "LIVE"
            ? "Acompanhar lote"
            : lot.status === "SCHEDULED"
              ? "Ver detalhes"
              : "Consultar resultado"}
          <ArrowUpRight size={16} />
        </button>
      </div>
    </article>
  );
}