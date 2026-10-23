import { ArrowUpRight, CalendarDays, Gavel } from "lucide-react";
import { Link } from "react-router-dom";
import type { AuctionResult } from "../../../../../mocks/auctioneer/results.mock";

interface ResultCardProps {
  result: AuctionResult;
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
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function ResultCard({ result }: ResultCardProps) {
  const wasSold = result.status === "SOLD";

  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-surface transition hover:shadow-md">
      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
        <img
          src={result.imageUrl}
          alt={result.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />

        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1.5 text-xs font-semibold ${
            wasSold
              ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
              : "bg-muted text-text-muted"
          }`}
        >
          {wasSold ? "Arrematado" : "Sem venda"}
        </span>

        <span className="absolute right-3 top-3 rounded-full bg-surface/95 px-3 py-1.5 text-xs font-medium text-text">
          {result.category}
        </span>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <p className="text-xs text-text-muted">Código: {result.id}</p>

          <h3 className="mt-1 font-semibold leading-6">{result.title}</h3>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-background p-3">
            <p className="text-xs text-text-muted">
              {wasSold ? "Preço final" : "Preço inicial"}
            </p>

            <p className="mt-1 break-words text-lg font-bold text-accent">
              {formatCurrency(result.finalPrice ?? result.startingPrice)}
            </p>
          </div>

          <div className="rounded-xl bg-background p-3">
            <p className="text-xs text-text-muted">Total de lances</p>

            <p className="mt-1 flex items-center gap-2 text-lg font-bold">
              <Gavel size={17} className="text-text-muted" />
              {result.totalBids}
            </p>
          </div>
        </div>

        <div className="space-y-2 border-t border-border pt-3 text-sm">
          <div className="flex items-start gap-2 text-text-muted">
            <CalendarDays size={16} className="mt-0.5 shrink-0" />

            <div>
              <p className="text-xs">Encerrado em</p>
              <p className="mt-1 font-medium text-text">
                {formatDate(result.endedAt)}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <Link
            to={`/auctions/${result.id}/audit`}
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