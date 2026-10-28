import { useMemo, useState } from "react";
import { ResultsFilters } from "../../../components/domain/Auctioneer/results/ResultsFilters";
import { ResultsHeader } from "../../../components/domain/Auctioneer/results/ResultsHeader";
import { ResultsList } from "../../../components/domain/Auctioneer/results/ResultsList";
import { useAuctioneerLot } from "../../../hooks/useAuctioneerLot";

export function Results() {
  const [search, setSearch] = useState("");
  const { stateAuctioneerLot } = useAuctioneerLot();
  const closedLots = stateAuctioneerLot?.closedLots ?? [];
  const loading = stateAuctioneerLot.loadingClosedLots;

  const filteredResults = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return closedLots.filter((lot) => {
      const categoryLabel =
        lot.attributes?.culture || lot.attributes?.department || "";
      const artist = lot.attributes?.artist || "";

      const matchesSearch = [
        lot.title,
        lot.id,
        lot.externalItemId,
        categoryLabel,
        artist,
      ].some((value) =>
        String(value ?? "").toLowerCase().includes(normalizedSearch)
      );

      return matchesSearch;
    });
  }, [closedLots, search]);

  return (
    <main className="min-h-screen bg-background px-4 py-6 text-text sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <ResultsHeader />

        <ResultsFilters
          search={search}
          onSearchChange={setSearch}
        />

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold">Histórico de resultados</h2>

            <p className="mt-1 text-sm text-text-muted">
              Consulte os lotes que já tiveram seu período de disputa encerrado.
            </p>
          </div>
        </div>

        <ResultsList results={filteredResults} isLoading={loading} />
      </div>
    </main>
  );
}