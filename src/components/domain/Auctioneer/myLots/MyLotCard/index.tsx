import {
  ArrowUpRight,
  CalendarClock,
  Clock3,
  Gavel,
  MoreHorizontal,
  Package,
  XCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { MyLot } from "../../../../../mocks/auctioneer/my-lots.mock";
import { formatCurrency } from "../../../../../utils/formatCurrency";

interface MyLotCardProps {
  lot: MyLot;
  onCancel: (lotId: string) => void;
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
  ENDED: {
    label: "Encerrado",
    className: "bg-muted text-gold",
  },
  CANCELED: {
    label: "Cancelado",
    className: "bg-muted text-text-muted",
  },
};

export function MyLotCard({ lot, onCancel }: MyLotCardProps) {
  const status = statusConfig[lot.status];

  const canCancel =
    (lot.status === "LIVE" || lot.status === "SCHEDULED") &&
    lot.totalBids === 0;

  const dateLabel =
    lot.status === "SCHEDULED" ? "Início" : "Encerramento";

  const dateValue =
    lot.status === "SCHEDULED" ? lot.startsAt : lot.endsAt;

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
      onCancel(lot.id);
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
                {lot.category} · {lot.id}
              </p>

              <h2 className="mt-2 text-lg font-bold tracking-tight">
                {lot.title}
              </h2>
            </div>

            <MoreHorizontal
              size={20}
              className="shrink-0 text-text-muted"
            />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4 border-y border-border py-4 sm:grid-cols-3">
            <div>
              <p className="text-xs text-text-muted">
                Maior lance
              </p>

              <p className="mt-1 text-lg font-bold text-accent">
                {formatCurrency(lot.currentBid)}
              </p>
            </div>

            <div>
              <p className="text-xs text-text-muted">
                Total de lances
              </p>

              <p className="mt-1 flex items-center gap-2 font-semibold">
                <Gavel size={16} className="text-text-muted" />
                {lot.totalBids}
              </p>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs text-text-muted">
                {dateLabel}
              </p>

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
            <Link
              to={`/auctions/${lot.id}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-muted"
            >
              Ver lote
              <ArrowUpRight size={16} />
            </Link>

            {canCancel && (
              <button
                type="button"
                onClick={handleCancel}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-text-muted transition-colors hover:bg-muted hover:text-accent"
              >
                <XCircle size={16} />
                Cancelar lote
              </button>
            )}

            {lot.status === "ENDED" && (
              <Link
                to={`/dashboard/results?lotId=${encodeURIComponent(lot.id)}`}
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