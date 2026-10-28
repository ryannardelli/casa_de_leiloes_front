import { ArrowUpRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import type { AuctioneerLot } from "../../../../../models/AuctioneerLot";

interface ResultCardProps {
  result: AuctioneerLot;
}

function formatCurrency(value: number | string | null | undefined) {
  const numericValue = Number(value) || 0;
  return numericValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function formatDate(value: string) {
  if (!value) return "Data não informada";
  return new Date(value).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function ResultCard({ result }: ResultCardProps) {
  console.log(result);
  const wasSold =
    result.status === "CLOSED" || (result.winnerId !== null && result.winnerId !== undefined);

  const displayPrice = wasSold
    ? result.finalPrice ?? result.currentPrice ?? result.startingPrice
    : result.startingPrice;

  const categoryLabel =
    result.attributes?.culture ||
    result.attributes?.department ||
    "Arte";

  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-surface transition hover:shadow-md">
      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
        <img
          src={result.imageUrl}
          alt={result.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />

        <span className="absolute right-3 top-3 rounded-full bg-surface/95 px-3 py-1.5 text-xs font-medium text-text">
          {categoryLabel}
        </span>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h3 className="mt-1 font-semibold leading-6">{result.title}</h3>

          {result.attributes?.artist && (
            <p className="mt-0.5 text-xs text-text-muted">
              {result.attributes.artist}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-background p-3">
            <p className="text-xs text-text-muted">
              Lance final
            </p>

            <p className="mt-1 break-words text-lg font-bold text-accent">
              {formatCurrency(displayPrice)}
            </p>
          </div>
        </div>

        <div className="space-y-2 border-t border-border pt-3 text-sm">
          <div className="flex items-start gap-2 text-text-muted">
            <CalendarDays size={16} className="mt-0.5 shrink-0" />

            <div>
              <p className="text-xs">Encerrado em</p>
              <p className="mt-1 font-medium text-text">
                {formatDate(result.endAt)}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <Link
            to={`/audit/${result.id}/lots`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-semibold transition hover:bg-muted"
          >
            Consultar auditoria
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </article>
  );
}