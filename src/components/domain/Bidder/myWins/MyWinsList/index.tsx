import { useMemo, useState } from "react";
import { Trophy } from "lucide-react";

import { MyWinsFilters } from "../MyWinsFilters";
import { MyWinCard } from "../MyWinCard";

import { useAwards } from "../../../../../hooks/useAwards";

export function MyWinsList() {
  const [search, setSearch] = useState("");

  const {
    stateAwards,
    loadMyAwards,
  } = useAwards();

  const {
    myAwards,
    loadingMyAwards,
    errorMyAwards,
  } = stateAwards;

  const filteredWins = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return myAwards.filter((win) => {
      const matchesTitle = win.title
        .toLowerCase()
        .includes(normalizedSearch);

      const matchesLotId = String(win.lotId)
        .includes(normalizedSearch);

      const matchesDescription = (win.description ?? "")
        .toLowerCase()
        .includes(normalizedSearch);

      return (
        matchesTitle ||
        matchesLotId ||
        matchesDescription
      );
    });
  }, [myAwards, search]);

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

      {loadingMyAwards ? (
        <div
          className="flex flex-col items-center rounded-2xl border border-border bg-surface px-6 py-12 text-center"
          role="status"
        >
          <p className="text-sm text-text-muted">
            Carregando seus arremates...
          </p>
        </div>
      ) : errorMyAwards ? (
        <div className="rounded-2xl border border-border bg-surface px-6 py-8 text-center">
          <p className="text-sm text-red-500">
            {errorMyAwards}
          </p>

          <button
            type="button"
            onClick={() => loadMyAwards().catch(() => undefined)}
            className="mt-4 cursor-pointer rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Tentar novamente
          </button>
        </div>
      ) : filteredWins.length > 0 ? (
        <div className="space-y-4">
          {filteredWins.map((win) => (
            <MyWinCard
              key={win.lotId}
              win={win}
            />
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
            {myAwards.length === 0
              ? "Você ainda não possui arremates registrados."
              : "Nenhum arremate corresponde aos critérios de busca informados."}
          </p>
        </div>
      )}
    </section>
  );
}
