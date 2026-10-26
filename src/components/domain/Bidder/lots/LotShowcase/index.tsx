import { useMemo, useState } from "react";
import { LotFilters, type TabId } from "../LotFilters";
import { LotStats } from "../LotStats";
import { LotCard } from "../LotCard";
import { usePublicLot } from "../../../../../hooks/usePublicLot";
import { LotCardSkeleton } from "../../../../ui/shared/Loading/bidder/lot/LotCardSkeleton";
import { LotSearchEmptyState } from "../LotSearchEmptyState";

export function LotShowcase() {
  const [activeTab, setActiveTab] = useState<TabId>("all");
  const [search, setSearch] = useState("");

  const { statePublicLots } = usePublicLot();
  const { lots, loadingLots, errorLots } = statePublicLots;

  const visibleLots = useMemo(() => {
    return lots.filter((lot) => {
      if (lot.status === "CANCELLED") return false;

      const matchesTab =
        activeTab === "all" ||
        lot.status.toLowerCase() === activeTab;

      const matchesSearch =
        `${lot.title} ${lot.attributes?.department ?? ""}`
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [lots, activeTab, search]);

  return (
    <main className="min-h-screen bg-background p-4 text-text sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Vitrine de lotes
            </h1>

            <p className="mt-2 max-w-2xl text-sm text-text-muted sm:text-base">
              Acompanhe os lotes em disputa e confira os próximos leilões
            </p>
          </div>
        </header>

        <LotStats lots={lots} />

        <section className="space-y-5">
          <LotFilters
            activeTab={activeTab}
            search={search}
            onTabChange={setActiveTab}
            onSearchChange={setSearch}
          />

          {loadingLots ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              <LotCardSkeleton count={lots.length} />
            </div>
          ) : errorLots ? (
            <p className="py-8 text-center text-sm text-text-muted">
              Não foi possível carregar os lotes. Tente novamente.
            </p>
          ) : visibleLots.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {visibleLots.map((lot) => (
                <LotCard key={lot.id} lot={lot} />
              ))}
            </div>
          ) : (
            <LotSearchEmptyState
              onClear={() => {
                setSearch("");
                setActiveTab("all");
              }}
            />
          )}
        </section>
      </div>
    </main>
  );
}