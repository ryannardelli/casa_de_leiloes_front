import {
  ArrowUpRight,
  CalendarClock,
  Clock3,
  MoreHorizontal,
  Package,
  XCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { AuctioneerLot } from "../../../../../models/AuctioneerLot";
import { formatCurrency } from "../../../../../utils/formatCurrency";
import { RouterLinks } from "../../../../ui/shared/Links/RouterLinks";

interface MyLotCardProps {
  lot: AuctioneerLot;
  onCancel: (lotId: string) => Promise<void>;
}

const statusConfig = {
  LIVE: {
    label: "Em andamento",
    className: "bg-muted text-accent",
  },
  SCHEDULED: {
    label: "Agendado",
    className: "bg-muted text-text-muted",
  },
  CLOSED: {
    label: "Encerrado",
    className: "bg-muted text-gold",
  },
  CANCELED: {
    label: "Cancelado",
    className: "bg-muted text-text-muted",
  },
  CANCELLED: {
    label: "Cancelado",
    className: "bg-muted text-text-muted",
  },
};

export function MyLotCard({ lot, onCancel }: MyLotCardProps) {
  const status = statusConfig[lot.status] ?? {
    label: lot.status,
    className: "bg-muted text-text-muted",
  };

  const canCancel =
    lot.status === "LIVE" || lot.status === "SCHEDULED";

  const dateLabel =
    lot.status === "SCHEDULED" ? "Início" : "Encerramento";

  const dateValue =
    lot.status === "SCHEDULED" ? lot.startAt : lot.endAt;

  const formattedDate = new Date(dateValue).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  function handleCancel() {
    const confirmed = window.confirm(
      `Deseja realmente cancelar o lote "${lot.title}"?`,
    );

    if (confirmed) {
      onCancel(lot.externalItemId);
    }
  }

  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/40">
      <div className="flex flex-col sm:flex-row">
        <div className="relative h-48 shrink-0 bg-muted sm:h-auto sm:w-52">
          <img
            src={lot.imageUrl}
            alt={lot.title}
            loading="lazy"
            className="h-full w-full object-cover"
          />

          <span
            className={`absolute left-3 top-3 rounded-full px-3 py-1.5 text-xs font-semibold ${status.className}`}
          >
            {status.label}
          </span>
        </div>

        <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
                {lot.attributes?.department || "Sem categoria"}
              </p>

              <h2 className="mt-2 text-lg font-bold tracking-tight">
                {lot.title}
              </h2>

              <p className="mt-1 text-sm text-text-muted">
                {lot.attributes?.artist || "Artista não informado"}
                {lot.attributes?.objectDate
                  ? ` · ${lot.attributes.objectDate}`
                  : ""}
              </p>
            </div>

            <MoreHorizontal
              size={20}
              className="shrink-0 text-text-muted"
            />
          </div>

          <p className="mt-3 text-sm leading-6 text-text-muted">
            {lot.description}
          </p>

          <div className="mt-5 grid grid-cols-2 gap-4 border-y border-border py-4 sm:grid-cols-3">
            <div>
              <p className="text-xs text-text-muted">Preço atual</p>

              <p className="mt-1 text-lg font-bold text-accent">
                {formatCurrency(Number(lot.currentPrice))}
              </p>
            </div>

            <div>
              <p className="text-xs text-text-muted">Preço inicial</p>

              <p className="mt-1 text-lg font-semibold">
                {formatCurrency(Number(lot.startingPrice))}
              </p>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs text-text-muted">{dateLabel}</p>

              <p className="mt-1 flex items-center gap-2 text-sm font-medium">
                {lot.status === "SCHEDULED" ? (
                  <CalendarClock
                    size={16}
                    className="shrink-0 text-text-muted"
                  />
                ) : (
                  <Clock3
                    size={16}
                    className="shrink-0 text-text-muted"
                  />
                )}

                {formattedDate}
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <RouterLinks
              href={`/auctions/${lot.id}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-muted"
            >
              Ver lote
              <ArrowUpRight size={16} />
            </RouterLinks>

            {canCancel && (
              <button
                type="button"
                onClick={handleCancel}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-text-muted transition-colors hover:bg-muted hover:text-accent cursor-pointer"
              >
                <XCircle size={16} />
                Cancelar lote
              </button>
            )}

            {lot.status === "CLOSED" && (
              <Link
                to={`/dashboard/results?lotId=${encodeURIComponent(String(lot.id))}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-muted"
              >
                Ver resultado
                <Package size={16} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}