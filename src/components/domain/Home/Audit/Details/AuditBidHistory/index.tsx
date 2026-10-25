import { CheckCircle2, Fingerprint } from "lucide-react";
import type { AuctionAudit } from "../../../../../../mocks/home/audit.mock";

interface AuditBidHistoryProps {
  bids: AuctionAudit["bids"];
}

const formatCurrency = (value: number) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

const formatDate = (value: string) =>
  new Date(value).toLocaleString("pt-BR", {
    dateStyle: "short",
    timeStyle: "medium",
  });

export function AuditBidHistory({ bids }: AuditBidHistoryProps) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6">
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            Histórico de lances
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Registros ordenados cronologicamente.
          </p>
        </div>

        <span className="w-fit rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
          {bids.length} registros
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200 text-xs uppercase tracking-wide text-gray-500">
              <th className="px-3 py-3 font-semibold">Participante</th>
              <th className="px-3 py-3 font-semibold">Valor</th>
              <th className="px-3 py-3 font-semibold">Data e hora</th>
              <th className="px-3 py-3 font-semibold">Integridade</th>
              <th className="px-3 py-3 font-semibold">Hash</th>
            </tr>
          </thead>

          <tbody>
            {bids.map((bid) => (
              <tr
                key={bid.id}
                className="border-b border-gray-100 last:border-0"
              >
                <td className="px-3 py-4">
                  <p className="font-semibold text-gray-900">
                    {bid.bidderName}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">{bid.id}</p>
                </td>

                <td className="px-3 py-4 font-semibold text-gray-900">
                  {formatCurrency(bid.amount)}
                </td>

                <td className="px-3 py-4 whitespace-nowrap text-gray-500">
                  {formatDate(bid.createdAt)}
                </td>

                <td className="px-3 py-4">
                  {bid.status === "VALID" ? (
                    <span className="flex items-center gap-1.5 text-emerald-700">
                      <CheckCircle2 size={16} />
                      Válido
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-red-700">
                      <Fingerprint size={16} />
                      Inválido
                    </span>
                  )}
                </td>

                <td className="px-3 py-4 font-mono text-xs text-gray-500">
                  {bid.hash}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}