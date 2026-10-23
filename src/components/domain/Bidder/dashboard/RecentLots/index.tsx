import { ArrowRight, Clock3, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { recentLots } from "../../../../../mocks/bidder/dashboard.mock";
import { formatCurrency } from "../../../../../utils/formatCurrency";

function getStatusStyle(status: string) {
  switch (status) {
    case "Ativo":
      return "text-accent bg-muted";
    case "Agendado":
      return "text-text-muted bg-muted";
    case "Encerrado":
      return "text-gold bg-muted";
    default:
      return "text-text-muted bg-muted";
  }
}

export function RecentLots() {
  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border p-5 sm:px-6">
        <div>
          <h2 className="font-semibold">Lotes recentes</h2>
          <p className="mt-1 text-sm text-text-muted">
            Acompanhe a atividade dos seus lotes.
          </p>
        </div>

        <Link
          to="/dashboard/lots"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:opacity-75"
        >
          Ver todos
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-muted/50 text-xs uppercase tracking-wider text-text-muted">
            <tr>
              <th className="px-6 py-4 font-medium">Lote</th>
              <th className="px-6 py-4 font-medium">Maior lance</th>
              <th className="px-6 py-4 font-medium">Lances</th>
              <th className="px-6 py-4 font-medium">Situação</th>
              <th className="px-6 py-4 font-medium">Encerramento</th>
              <th className="px-6 py-4 font-medium">Ação</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border">
            {recentLots.map((lot) => (
              <tr
                key={lot.id}
                className="transition-colors hover:bg-muted/40"
              >
                <td className="px-6 py-4">
                  <p className="font-semibold">{lot.title}</p>
                  <p className="mt-1 text-xs text-text-muted">
                    {lot.id} · {lot.category}
                  </p>
                </td>

                <td className="px-6 py-4 font-semibold">
                  {formatCurrency(lot.currentBid)}
                </td>

                <td className="px-6 py-4 text-text-muted">
                  {lot.bids}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${getStatusStyle(lot.status)}`}
                  >
                    {lot.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-text-muted">
                  <span className="inline-flex items-center gap-2">
                    <Clock3 size={15} />
                    {lot.endsAt}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <Link
                    to={`/auctions/${lot.id}`}
                    aria-label={`Visualizar ${lot.title}`}
                    className="inline-flex rounded-lg p-2 text-text-muted transition hover:bg-muted hover:text-accent"
                  >
                    <Eye size={18} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}