import { Plus } from "lucide-react";
import { RouterLinks } from "../../../../ui/shared/Links/RouterLinks";

export function AuctioneerDashboardHeader() {
  return (
    <header className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
      <div>
      <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
        Visão geral
      </h1>

      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-muted">
        Gerencie seus lotes, acompanhe os leilões em andamento e monitore os
        lances recebidos. Consulte os resultados e acompanhe o desempenho
        dos seus leilões em um só lugar.
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