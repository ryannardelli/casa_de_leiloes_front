import { ArrowLeft, PackagePlus } from "lucide-react";
import { Link } from "react-router-dom";
import { RouterLinks } from "../../../../ui/shared/Links/RouterLinks";

export function CreateLotHeader() {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white dark:text-background">
          <PackagePlus size={22} />
        </div>

        <div>
          <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
            Criar novo lote
          </h1>

          <p className="mt-2 text-sm leading-6 text-text-muted">
            Selecione uma obra e configure os detalhes do leilão.
          </p>
        </div>
      </div>

      <RouterLinks
        href="/auctioneer/lots"
        className="inline-flex w-fit items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-semibold transition hover:bg-muted"
      >
        <ArrowLeft size={17} />
        Voltar aos lotes
      </RouterLinks>
    </header>
  );
}