import { Gavel } from "lucide-react";
import type { Bid } from "../../../../../../models/Bid";

interface AuditBidHistoryProps {
  bids: Bid[];
}
const formatCurrency = (value: string | number) =>
  Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

const formatDate = (value: string) =>
  new Date(value).toLocaleString("pt-BR", {
    dateStyle: "short",
    timeStyle: "medium",
  });

export function AuditBidHistory({ bids }: AuditBidHistoryProps) {
  const orderedBids = [...bids].sort(
    (a, b) =>
      new Date(b.createdAt).getTime() -
      new Date(a.createdAt).getTime()
  );

  return (
    <section className="rounded-2xl border border-border bg-surface p-6">
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-text">
            Histórico de lances
          </h2>
          <p className="mt-1 text-sm text-text-muted">
            Histórico de lances do lote, com registros e hashes para verificação de integridade.
          </p>
        </div>

        <span className="w-fit rounded-full bg-muted px-3 py-1 text-sm font-medium text-text-muted">
          {bids.length} registros
        </span>
      </div>

      {orderedBids.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl bg-muted/50 px-4 py-10 text-center">
          <Gavel size={28} className="text-text-muted" />
          <p className="mt-3 font-semibold text-text">
            Nenhum lance registrado
          </p>
          <p className="mt-1 text-sm text-text-muted">
            Não há lances disponíveis para consulta neste lote.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left text-sm">
              <thead>
                <tr className="border-b border-border text-xs uppercase tracking-wide text-text-muted">
                  <th className="px-3 py-3 font-semibold">Participante</th>
                  <th className="px-3 py-3 font-semibold">Valor</th>
                  <th className="px-3 py-3 font-semibold">Data e hora</th>
                  <th className="px-3 py-3 font-semibold">Hash do registro</th>
                </tr>
              </thead>

              <thead>
                <tr className="border-b border-border text-xs uppercase tracking-wide text-text-muted">
                  <th className="px-3 py-3 font-semibold">Participante</th>
                  <th className="px-3 py-3 font-semibold">Valor do lance</th>
                  <th className="px-3 py-3 font-semibold">Data</th>
                  <th className="px-3 py-3 font-semibold">Hash do registro (SHA-256)</th>
                  <th className="px-3 py-3 font-semibold">Hash anterior</th>
                </tr>
              </thead>

              <tbody>
                {orderedBids.map((bid) => (
                  <tr
                    key={bid.id}
                    className="border-b border-border last:border-0"
                  >
                    <td className="px-3 py-4">
                      <p className="font-semibold text-text">
                        Licitante #{bid.bidderId}
                      </p>
                      <p className="mt-1 text-xs text-text-muted">
                        Lance #{bid.id}
                      </p>
                    </td>

                    <td className="px-3 py-4 font-semibold text-text">
                      {formatCurrency(bid.amount)}
                    </td>

                    <td className="whitespace-nowrap px-3 py-4 text-text-muted">
                      {formatDate(bid.createdAt)}
                    </td>

                    <td className="min-w-[280px] px-3 py-4">
                      <code
                        title={bid.hash}
                        className="block break-all font-mono text-xs text-text"
                      >
                        {bid.hash}
                      </code>
                    </td>

                    <td className="min-w-[280px] px-3 py-4">
                      <code
                        title={bid.previousHash ?? "Não disponível"}
                        className="block break-all font-mono text-xs text-text-muted"
                      >
                        {bid.previousHash ?? "Não disponível"}
                      </code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
      )}
    </section>
  );
}
