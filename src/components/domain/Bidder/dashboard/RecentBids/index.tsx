import { ArrowRight, Clock3, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../../../../utils/formatCurrency";
import { useBids } from "../../../../../hooks/useBids";
import { RecentBidsSkeleton } from "../../../../ui/shared/Loading/bidder/dashboard/RecentBidsSkeleton";

function getStatusStyle(status: string) {
  switch (status) {
    case "LIVE":
      return "text-accent bg-muted";
    case "SCHEDULED":
      return "text-text-muted bg-muted";
    case "CLOSED":
      return "text-gold bg-muted";
    case "CANCELLED":
      return "text-text-muted bg-muted";
    default:
      return "text-text-muted bg-muted";
  }
}

function getStatusLabel(status: string) {
  switch (status) {
    case "LIVE":
      return "Em andamento";
    case "SCHEDULED":
      return "Agendado";
    case "CLOSED":
      return "Encerrado";
    case "CANCELLED":
      return "Cancelado";
    default:
      return status;
  }
}

export function RecentBids() {
  const { stateBids } = useBids();
  const { myBids } = stateBids;

  const recentBids = [...myBids]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime()
    )
    .slice(0, 4);

  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border p-5 sm:px-6">
        <div>
          <h2 className="font-semibold">Lances recentes</h2>
          <p className="mt-1 text-sm text-text-muted">
            Acompanhe seus últimos lances realizados.
          </p>
        </div>

        <Link
          to="/bidder/my-bids"
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
              <th className="px-6 py-4 font-medium">Meu lance</th>
              <th className="px-6 py-4 font-medium">Maior lance</th>
              <th className="px-6 py-4 font-medium">Situação</th>
              <th className="px-6 py-4 font-medium">Data do lance</th>
              <th className="px-6 py-4 font-medium">Ação</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border">
            {stateBids.loadingMyBids ? (
              <RecentBidsSkeleton />
            ) : stateBids.errorMyBids ? (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-text-muted">
                  Não foi possível carregar os lances recentes.
                </td>
              </tr>
            ) : recentBids.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-text-muted">
                  Você ainda não realizou nenhum lance.
                </td>
              </tr>
            ) : (
              recentBids.slice(0,4).map((bid) => (
                <tr
                  key={bid.id}
                  className="transition-colors hover:bg-muted/40"
                >
                  <td className="px-6 py-4">
                    <p className="font-semibold">{bid.lot?.title}</p>
                    <p className="mt-1 text-xs text-text-muted">
                      Lote #{bid.lotId}
                    </p>
                  </td>

                  <td className="px-6 py-4 font-semibold">
                    {formatCurrency(Number(bid.amount))}
                  </td>

                  <td className="px-6 py-4 font-semibold">
                    {formatCurrency(Number(bid.lot?.currentPrice))}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${getStatusStyle(
                        bid.lot?.status ?? ""
                      )}`}
                    >
                      {getStatusLabel(bid.lot?.status ?? "")}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-text-muted">
                    <span className="inline-flex items-center gap-2">
                      <Clock3 size={15} />
                      {new Date(bid.createdAt).toLocaleString("pt-BR", {
                        dateStyle: "short",
                        timeStyle: "short",
                      })}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <Link
                      to={`/auctions/${bid.lotId}`}
                      aria-label={`Visualizar ${bid.lot?.title}`}
                      className="inline-flex rounded-lg p-2 text-text-muted transition hover:bg-muted hover:text-accent"
                    >
                      <Eye size={18} />
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}