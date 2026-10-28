import { FileSearch } from "lucide-react";
import type { AuctioneerLot } from "../../../../../models/AuctioneerLot";
import { ResultCard } from "../ResultCard";
import { ResultCardSkeleton } from "../../../../ui/shared/Loading/auctioneer/results/ResultCardSkeleton";

interface ResultsListProps {
  results: AuctioneerLot[];
  isLoading?: boolean;
}

export function ResultsList({ results, isLoading }: ResultsListProps) {
  if (isLoading) {
    return (
      <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: results.length }).map((_, index) => (
          <ResultCardSkeleton key={index} />
        ))}
      </section>
    );
  }

  if (!results || results.length === 0) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-dashed border-border bg-surface px-6 py-14 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted text-text-muted">
          <FileSearch size={26} />
        </div>

        <h3 className="mt-4 text-lg font-semibold">
          Nenhum resultado encontrado
        </h3>

        <p className="mt-2 max-w-sm text-sm leading-6 text-text-muted">
          Não encontramos resultados com os filtros selecionados. Tente
          pesquisar por outro lote, artista ou categoria.
        </p>
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {results.map((result) => (
        <ResultCard key={result.id} result={result} />
      ))}
    </section>
  );
}