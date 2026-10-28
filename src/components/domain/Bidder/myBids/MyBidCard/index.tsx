import { Clock3, Gavel, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Bid } from "../../../../../models/Bid";
import { statusConfig } from "../../../../../utils/statusConfig";

interface MyBidCardProps {
  bid: Bid;
}

const formatCurrency = (value: number) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
  });

export function MyBidCard({ bid }: MyBidCardProps) {
  const lot = bid.lot;

  if (!lot) return null;

  const status = statusConfig[
    lot.status as keyof typeof statusConfig
  ] ?? {
    label: "Status desconhecido",
    className: "bg-muted text-text-muted",
  };

  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/50">
      <div className="flex flex-col sm:flex-row">
        <img
          src={lot.imageUrl ?? undefined}
          alt={lot.title}
          loading="lazy"
          className="h-48 w-full object-cover sm:h-auto sm:w-44"
        />

        <div className="flex min-w-0 flex-1 flex-col p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="mt-1 font-semibold">
                {lot.title}
              </h3>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${status.className}`}
            >
              {status.label}
            </span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-text-muted">
                Maior lance do lote
              </p>
              <p className="mt-1 font-bold">
                {formatCurrency(Number(lot.currentPrice))}
              </p>
            </div>

            <div>
              <p className="text-xs text-text-muted">
                Seu lance
              </p>
              <p className="mt-1 font-semibold">
                {formatCurrency(Number(bid.amount))}
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <Gavel size={15} />
              Lance registrado

              <span className="text-border">·</span>

              <Clock3 size={15} />
              {new Date(bid.createdAt).toLocaleString("pt-BR", {
                dateStyle: "short",
                timeStyle: "short",
              })}
            </div>

            <Link
              to={`/auctions/${bid.lotId}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:opacity-75"
            >
              Ver leilão
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
