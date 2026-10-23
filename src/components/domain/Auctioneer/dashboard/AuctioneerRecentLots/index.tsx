import { ArrowRight, Clock3, Gavel } from "lucide-react";
import { Link } from "react-router-dom";
import { auctioneerRecentLots } from "../../../../../mocks/auctioneer/auctioneer-dashboard.mock";
import { formatCurrency } from "../../../../../utils/formatCurrency";

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
};

export function AuctioneerRecentLots() {
  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="flex flex-col gap-3 border-b border-border p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <h2 className="font-semibold">Seus lotes</h2>
          <p className="mt-1 text-sm text-text-muted">
            Acompanhe os lotes recentes e seus resultados.
          </p>
        </div>

        <Link
          to="/dashboard/lots"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
        >
          Ver todos
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] text-left text-sm">
          <thead className="bg-background text-xs uppercase tracking-wide text-text-muted">
            <tr>
              <th className="px-5 py-4 font-medium">Lote</th>
              <th className="px-5 py-4 font-medium">Maior lance</th>
              <th className="px-5 py-4 font-medium">Lances</th>
              <th className="px-5 py-4 font-medium">Encerramento</th>
              <th className="px-5 py-4 font-medium">Status</th>
              <th className="px-5 py-4 font-medium">Ação</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border">
            {auctioneerRecentLots.map((lot) => {
              const status = statusConfig[lot.status];

              return (
                <tr key={lot.id} className="transition-colors hover:bg-muted/50">
                  <td className="px-5 py-4">
                    <p className="font-semibold">{lot.title}</p>
                    <p className="mt-1 text-xs text-text-muted">
                      {lot.category} · {lot.id}
                    </p>
                  </td>

                  <td className="px-5 py-4 font-semibold">
                    {formatCurrency(lot.currentBid)}
                  </td>

                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-1.5 text-text-muted">
                      <Gavel size={15} />
                      {lot.totalBids}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 size={15} />
                      {lot.endsAt}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <span className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium ${status.className}`}>
                      {status.label}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <Link
                      to={`/auctions/${lot.id}`}
                      aria-label={`Ver lote ${lot.title}`}
                      className="inline-flex items-center gap-1 font-medium text-accent hover:underline"
                    >
                      Ver
                      <ArrowRight size={14} />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}