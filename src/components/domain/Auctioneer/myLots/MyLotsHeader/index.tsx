import { Plus, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { RouterLinks } from "../../../../ui/shared/Links/RouterLinks";

export function MyLotsHeader() {
  return (
    <header className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-accent">
            <Package size={22} />
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Meus lotes
            </h1>
          </div>
        </div>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-text-muted">
          Gerencie seus lotes, acompanhe os lances e consulte
          os resultados dos seus leilões.
        </p>
      </div>

      <RouterLinks
        href="/auctioneer/lots/new"
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        <Plus size={18} />
        Criar novo lote
      </RouterLinks>
    </header>
  );
}