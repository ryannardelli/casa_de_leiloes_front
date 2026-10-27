import {
  CalendarDays,
  Share2,
  Trophy,
} from "lucide-react";

import type { Award } from "../../../../../models/Award";
import { formatCurrency } from "../../../../../utils/formatCurrency";

interface MyWinCardProps {
  win: Award;
}

export function MyWinCard({ win }: MyWinCardProps) {
  const endedAt = win.endAt
    ? new Date(win.endAt).toLocaleString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "Data não informada";

  async function handleShare() {
    const receiptUrl = new URL(
      `/receipts/${encodeURIComponent(String(win.lotId))}`,
      window.location.origin
    ).toString();

    const shareData = {
      title: `Comprovante de arremate — ${win.title}`,
      text: `Confira meu arremate no Arremata: ${win.title}, por ${formatCurrency(win.finalPrice)}.`,
      url: receiptUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(receiptUrl);
        window.alert("Link do comprovante copiado!");
      }
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        return;
      }

      window.alert("Não foi possível compartilhar o comprovante.");
    }
  }

  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/40">
      <div className="flex flex-col sm:flex-row">
        <div className="relative h-52 shrink-0 bg-muted sm:h-auto sm:w-56">
          {win.imageUrl ? (
            <img
              src={win.imageUrl}
              alt={win.title}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full min-h-52 items-center justify-center text-sm text-text-muted">
              Imagem não disponível
            </div>
          )}

          <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-surface">
            <Trophy size={14} className="text-gold" />
            Arrematado
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 className="mt-2 text-lg font-bold tracking-tight">
                {win.title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-text-muted">
                {win.description || "Sem descrição disponível."}
              </p>
            </div>

            <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold">
              {win.status}
            </span>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 border-y border-border py-4 sm:grid-cols-2">
            <div>
              <p className="text-xs text-text-muted">Valor final</p>

              <p className="mt-1 text-lg font-bold text-accent">
                {formatCurrency(win.finalPrice)}
              </p>
            </div>

            <div>
              <p className="text-xs text-text-muted">Encerramento</p>

              <p className="mt-1 flex items-center gap-2 text-sm font-medium">
                <CalendarDays
                  size={16}
                  className="shrink-0 text-text-muted"
                />

                {endedAt}
              </p>
            </div>
          </div>

          {win.settledAt && (
            <p className="mt-3 text-sm text-text-muted">
              Liquidado em:{" "}
              {new Date(win.settledAt).toLocaleDateString("pt-BR")}
            </p>
          )}

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <Share2 size={16} />
              Compartilhar comprovante
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
