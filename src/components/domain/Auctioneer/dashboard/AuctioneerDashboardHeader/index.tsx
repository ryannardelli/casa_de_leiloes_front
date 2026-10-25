import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { RouterLinks } from "../../../../ui/shared/Links/RouterLinks";

export function AuctioneerDashboardHeader() {
  return (
    <header className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
      <div>
        <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
          Visão geral
        </h1>

        <p className="mt-2 text-sm text-text-muted">
          Acompanhe o desempenho dos seus lotes e os resultados dos leilões.
        </p>
      </div>

      <RouterLinks
        href="/auctioneer/lots/new"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        <Plus size={18} />
        Criar novo lote
      </RouterLinks>
    </header>
  );
}