import { useMemo, useState } from "react";
import { ActiveLotsFilters } from "../../../components/domain/Auctioneer/activeLots/ActiveLotsFilters";
import { ActiveLotsHeader } from "../../../components/domain/Auctioneer/activeLots/ActiveLotsHeader";;
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

  return (
    <main className="min-h-screen bg-background px-4 py-6 text-text sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <ActiveLotsHeader />

        <ActiveLotsFilters
          search={search}
          onSearchChange={setSearch}
        />

        <ActiveLotsList lots={filteredLots} isLoading={loadingLiveLots}/>
      </div>
    </main>
  );
}