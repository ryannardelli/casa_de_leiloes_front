import { useMemo, useState } from "react";
import { Trophy } from "lucide-react";
import { MyWinsFilters, type MyWinsFilterStatus } from "../MyWinsFilters";
import { myWins } from "../../../../../mocks/bidder/myWins.mock";
import { MyWinCard } from "../MyWinCard";

export function MyWinsList() {
  const [search, setSearch] = useState("");

  const filteredWins = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return myWins.filter((win) => {
      const matchesSearch =
        win.title.toLowerCase().includes(normalizedSearch) ||
        win.category.toLowerCase().includes(normalizedSearch) ||
        win.lotId.toLowerCase().includes(normalizedSearch);


      return matchesSearch;
    });
  }, [search]);

  return (
    <section className="space-y-5">
      <div>
        <h2 className="text-lg font-semibold">
          Histórico de arremates
        </h2>

        <p className="mt-1 text-sm text-text-muted">
          Consulte os lotes conquistados e acesse seus comprovantes.
        </p>
      </div>

      <MyWinsFilters
        search={search}
        onSearchChange={setSearch}
      />

      {filteredWins.length > 0 ? (
        <div className="space-y-4">
          {filteredWins.map((win) => (
            <MyWinCard key={win.id} win={win} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center rounded-2xl border border-dashed border-border bg-surface px-6 py-12 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-text-muted">
            <Trophy size={22} />
          </div>

          <h3 className="mt-4 font-semibold">
            Nenhum arremate encontrado
          </h3>

          <p className="mt-2 max-w-sm text-sm leading-6 text-text-muted">
            Você ainda não possui arremates com esses critérios.
          </p>
        </div>
      )}
    </section>
  );
}