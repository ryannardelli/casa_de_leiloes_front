import { ArrowUpRight, Clock3, Gavel, History } from "lucide-react";
import { Link } from "react-router-dom";
import type { ActiveLot } from "../../../../../mocks/auctioneer/active-lots.mock";

interface ActiveLotCardProps {
  lot: ActiveLot;
}

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function formatDate(value: string) {
  return new Date(value).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function ActiveLotCard({ lot }: ActiveLotCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-surface transition hover:shadow-md">
      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
        <img
          src={lot.imageUrl}
          alt={lot.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />

        <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-surface/95 px-3 py-1.5 text-xs font-semibold text-text">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Em andamento
        </span>

        <span className="absolute right-3 top-3 rounded-full bg-surface/95 px-3 py-1.5 text-xs font-medium text-text">
          {lot.category}
        </span>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <p className="text-xs text-text-muted">Código: {lot.id}</p>

          <h3 className="mt-1 font-semibold leading-6">{lot.title}</h3>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-background p-3">
            <p className="text-xs text-text-muted">Lance atual</p>

            <p className="mt-1 text-lg font-bold text-accent">
              {formatCurrency(lot.currentBid)}
            </p>
          </div>

          <div className="rounded-xl bg-background p-3">
            <p className="text-xs text-text-muted">Total de lances</p>

            <p className="mt-1 flex items-center gap-2 text-lg font-bold">
              <Gavel size={17} className="text-text-muted" />
              {lot.totalBids}
            </p>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between gap-3">
            <span className="text-text-muted">Preço inicial</span>
            <span className="font-medium">
              {formatCurrency(lot.startingPrice)}
            </span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="text-text-muted">Incremento mínimo</span>
            <span className="font-medium">
              {formatCurrency(lot.minimumIncrement)}
            </span>
          </div>

          <div className="flex items-start gap-2 border-t border-border pt-3 text-text-muted">
            <Clock3 size={16} className="mt-0.5 shrink-0" />

            <div>
              <p className="text-xs">Data de encerramento</p>
              <p className="mt-1 text-sm font-medium text-text">
                {formatDate(lot.endsAt)}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 border-t border-border pt-4">
          <Link
            to={`/auctions/${lot.id}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-background px-3 py-3 text-sm font-semibold text-white transition hover:opacity-90 dark:text-background"
          >
            Ver sala
            <ArrowUpRight size={16} />
          </Link>

          <Link
            to={`/auctions/${lot.id}/audit`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-3 py-3 text-sm font-semibold transition hover:bg-muted"
          >
            <History size={16} />
            Auditoria
          </Link>
        </div>
      </div>
    </article>
  );
}