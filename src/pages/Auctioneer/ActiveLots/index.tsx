import { useMemo, useState } from "react";
import { ActiveLotsFilters } from "../../../components/domain/Auctioneer/activeLots/ActiveLotsFilters";
import { ActiveLotsHeader } from "../../../components/domain/Auctioneer/activeLots/ActiveLotsHeader";
import { ActiveLotsStats } from "../../../components/domain/Auctioneer/activeLots/ActiveLotsStats";
import { ActiveLotsList } from "../../../components/domain/Auctioneer/activeLots/ActiveLotsList";
import { useAuctioneerLot } from "../../../hooks/useAuctioneerLot";

export function ActiveLots() {
  const [search, setSearch] = useState("");
  const { stateAuctioneerLot } = useAuctioneerLot();
  const liveLots = stateAuctioneerLot?.liveLots ?? [];
  const loadingLiveLots = stateAuctioneerLot.loadingLiveLots;

  const filteredLots = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return liveLots.filter((lot) => {
      const categoryOrDepartment = lot.attributes?.culture || lot.attributes?.department || "";
      
      const matchesSearch = [
        lot.title,
        categoryOrDepartment,
        lot.id,
        lot.externalItemId
      ].some((value) =>
        String(value ?? "").toLowerCase().includes(normalizedSearch)
      );

      return matchesSearch;
    });
  }, [liveLots, search]);

  const activeStatsLots = useMemo(() => {
    return liveLots.filter(
      (lot) => new Date(lot.endAt).getTime() > Date.now()
    );
  }, [liveLots]);

  return (
    <main className="min-h-screen bg-background px-4 py-6 text-text sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <ActiveLotsHeader />

        <ActiveLotsStats lots={activeStatsLots} />

        <ActiveLotsFilters
          search={search}
          onSearchChange={setSearch}
        />

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold">Seus lotes ativos</h2>

            <p className="mt-1 text-sm text-text-muted">
              Acompanhe os resultados parciais de cada disputa.
            </p>
          </div>
        </div>

        <ActiveLotsList lots={filteredLots} isLoading={loadingLiveLots}/>
      </div>
    </main>
  );
}