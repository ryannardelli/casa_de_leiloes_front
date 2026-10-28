import { useMemo, useState } from "react";
import { ActiveLotsFilters, type ActiveLotsSort } from "../../../components/domain/Auctioneer/activeLots/ActiveLotsFilters";
import { activeLotsMock } from "../../../mocks/auctioneer/active-lots.mock";
import { ActiveLotsHeader } from "../../../components/domain/Auctioneer/activeLots/ActiveLotsHeader";
import { ActiveLotsStats } from "../../../components/domain/Auctioneer/activeLots/ActiveLotsStats";
import { ActiveLotsList } from "../../../components/domain/Auctioneer/activeLots/ActiveLotsList";
import { useAuctioneerLot } from "../../../hooks/useAuctioneerLot";

export function ActiveLots() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ALL");
  const [sort, setSort] = useState<ActiveLotsSort>("ENDING_SOON");
  const { stateAuctioneerLot } = useAuctioneerLot();
  console.log(stateAuctioneerLot);

  const categories = useMemo(
    () => [...new Set(activeLotsMock.map((lot) => lot.category))].sort(),
    [],
  );

  const filteredLots = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    const result = activeLotsMock.filter((lot) => {
      const matchesSearch = [lot.title, lot.category, lot.id].some((value) =>
        value.toLowerCase().includes(normalizedSearch),
      );

      const matchesCategory =
        category === "ALL" || lot.category === category;

      const isActive = new Date(lot.endsAt).getTime() > Date.now();

      return matchesSearch && matchesCategory && isActive;
    });

    return [...result].sort((a, b) => {
      if (sort === "MOST_BIDS") {
        return b.totalBids - a.totalBids;
      }

      if (sort === "HIGHEST_BID") {
        return b.currentBid - a.currentBid;
      }

      return (
        new Date(a.endsAt).getTime() - new Date(b.endsAt).getTime()
      );
    });
  }, [search, category, sort]);

  return (
    <main className="min-h-screen bg-background px-4 py-6 text-text sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <ActiveLotsHeader />

        <ActiveLotsStats lots={activeLotsMock.filter(
          (lot) => new Date(lot.endsAt).getTime() > Date.now(),
        )} />

        <ActiveLotsFilters
          search={search}
          category={category}
          sort={sort}
          categories={categories}
          onSearchChange={setSearch}
          onCategoryChange={setCategory}
          onSortChange={setSort}
        />

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold">Seus lotes ativos</h2>

            <p className="mt-1 text-sm text-text-muted">
              Acompanhe os resultados parciais de cada disputa.
            </p>
          </div>

          <p className="text-sm text-text-muted">
            {filteredLots.length}{" "}
            {filteredLots.length === 1
              ? "lote encontrado"
              : "lotes encontrados"}
          </p>
        </div>

        <ActiveLotsList lots={filteredLots} />
      </div>
    </main>
  );
}