import { Clock3, Gavel, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { MyBid, MyBidStatus } from "../../../../../mocks/bidder/myBids.mock";

interface MyBidCardProps {
  bid: MyBid;
}

const statusConfig: Record<
  MyBidStatus,
  { label: string; className: string }
> = {
  WINNING: {
    label: "Você está liderando",
    className: "bg-muted text-accent",
  },
  OUTBID: {
    label: "Seu lance foi superado",
    className: "bg-muted text-text",
  },
  WON: {
    label: "Arremate conquistado",
    className: "bg-muted text-gold",
  },
  LOST: {
    label: "Leilão encerrado",
    className: "bg-muted text-text-muted",
  },
};

const formatCurrency = (value: number) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });

export function MyBidCard({ bid }: MyBidCardProps) {
  const status = statusConfig[bid.status];

  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/50">
      <div className="flex flex-col sm:flex-row">
        <img
          src={bid.imageUrl}
          alt={bid.title}
          loading="lazy"
          className="h-48 w-full object-cover sm:h-auto sm:w-44"
        />

        <div className="flex min-w-0 flex-1 flex-col p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-xs text-text-muted">
                {bid.category} · {bid.lotId}
              </p>

              <h3 className="mt-1 font-semibold">{bid.title}</h3>
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
                {formatCurrency(bid.currentBid)}
              </p>
            </div>

            <div>
              <p className="text-xs text-text-muted">
                Seu maior lance
              </p>
              <p className="mt-1 font-semibold">
                {formatCurrency(bid.myHighestBid)}
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <Gavel size={15} />
              {bid.totalBids} lances no total
              <span className="text-border">·</span>
              <Clock3 size={15} />
              {bid.endsAt}
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