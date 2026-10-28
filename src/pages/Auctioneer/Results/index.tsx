import { useMemo, useState } from "react";
import { ResultsFilters, type ResultsStatusFilter } from "../../../components/domain/Auctioneer/results/ResultsFilters";
import { resultsMock } from "../../../mocks/auctioneer/results.mock";
import { ResultsHeader } from "../../../components/domain/Auctioneer/results/ResultsHeader";
import { ResultsList } from "../../../components/domain/Auctioneer/results/ResultsList";

export function Results() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<ResultsStatusFilter>("ALL");
  const [category, setCategory] = useState("ALL");

  const categories = useMemo(
    () => [...new Set(resultsMock.map((result) => result.category))].sort(),
    [],
  );

  const filteredResults = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return resultsMock.filter((result) => {
      const matchesSearch = [
        result.title,
        result.category,
        result.id,
      ].some((value) => value.toLowerCase().includes(normalizedSearch));

      const matchesStatus =
        status === "ALL" || result.status === status;

      const matchesCategory =
        category === "ALL" || result.category === category;

      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [search, status, category]);

  return (
    <main className="min-h-screen bg-background px-4 py-6 text-text sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <ResultsHeader />

        <ResultsFilters
          search={search}
          status={status}
          category={category}
          categories={categories}
          onSearchChange={setSearch}
          onStatusChange={setStatus}
          onCategoryChange={setCategory}
        />

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold">Histórico de resultados</h2>

            <p className="mt-1 text-sm text-text-muted">
              Consulte os lotes que já tiveram seu período de disputa encerrado.
            </p>
          </div>
        </div>

        <ResultsList results={filteredResults} />
      </div>
    </main>
  );
}