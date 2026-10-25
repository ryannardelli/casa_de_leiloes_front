import {Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { RouterLinks } from "../../../../ui/shared/Links/RouterLinks";

export function ActiveLotsHeader() {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
          Leilões em andamento
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-text-muted">
          Acompanhe os lances, monitore o desempenho e gerencie seus lotes
          ativos.
        </p>
      </div>

      <RouterLinks
        href="/auctioneer/lots/new"
        className="inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90 dark:text-background"
      >
        <Plus size={18} />
        Criar novo lote
      </RouterLinks>
    </header>
  );
}