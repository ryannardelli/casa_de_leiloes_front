import { Search } from "lucide-react";
import type { AuctionResultStatus } from "../../../../../mocks/auctioneer/results.mock";

export type ResultsStatusFilter = "ALL" | AuctionResultStatus;

interface ResultsFiltersProps {
  search: string;
  status: ResultsStatusFilter;
  category: string;
  categories: string[];
  onSearchChange: (value: string) => void;
  onStatusChange: (value: ResultsStatusFilter) => void;
  onCategoryChange: (value: string) => void;
}

const selectClassName =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none focus:border-accent";

export function ResultsFilters({
  search,
  status,
  category,
  categories,
  onSearchChange,
  onStatusChange,
  onCategoryChange,
}: ResultsFiltersProps) {
  return (
    <section className="space-y-4">
      <h2 className="font-semibold">Consultar resultados</h2>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-[minmax(0,1fr)_190px_200px]">
        <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4">
          <Search size={19} className="shrink-0 text-text-muted" />

          <input
            type="search"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Buscar por lote ou categoria..."
            aria-label="Buscar resultados"
            className="w-full bg-transparent py-3 text-sm text-text outline-none placeholder:text-text-muted"
          />
        </div>

        <select
          value={status}
          onChange={(event) =>
            onStatusChange(event.target.value as ResultsStatusFilter)
          }
          aria-label="Filtrar por resultado"
          className={selectClassName}
        >
          <option value="ALL">Todos os resultados</option>
          <option value="SOLD">Arrematados</option>
          <option value="UNSOLD">Sem venda</option>
        </select>

        <select
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
          aria-label="Filtrar por categoria"
          className={selectClassName}
        >
          <option value="ALL">Todas as categorias</option>

          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}