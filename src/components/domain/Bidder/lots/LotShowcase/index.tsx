import { useMemo, useState } from "react";
import { LotFilters, type TabId } from "../LotFilters";
import { lots } from "../../../../../mocks/bidder/lots-mock";
import { LotStats } from "../LotStats";
import { LotCard } from "../LotCard";
import { LotEmptyState } from "../LotEmptyState";

export function LotShowcase() {
  const [activeTab, setActiveTab] = useState<TabId>("all");
  const [search, setSearch] = useState("");

  const visibleLots = useMemo(() => {
    return lots.filter((lot) => {
      if (lot.status === "cancelled") return false;

      const matchesTab =
        activeTab === "all" || lot.status === activeTab;

      const matchesSearch = `${lot.title} ${lot.category}`
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [activeTab, search]);

  return (
    <main className="min-h-screen bg-background p-4 text-text sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Vitrine de lotes
            </h1>

            <p className="mt-2 max-w-2xl text-sm text-text-muted sm:text-base">
              Acompanhe os lotes em disputa e confira os próximos
              leilões
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

          {visibleLots.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {visibleLots.map((lot) => (
                <LotCard key={lot.id} lot={lot} />
              ))}
            </div>
          ) : (
            <LotEmptyState
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