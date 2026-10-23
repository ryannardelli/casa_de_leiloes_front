import { Search } from "lucide-react";

export type ActiveLotsSort =
  | "ENDING_SOON"
  | "MOST_BIDS"
  | "HIGHEST_BID";

interface ActiveLotsFiltersProps {
  search: string;
  category: string;
  sort: ActiveLotsSort;
  categories: string[];
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onSortChange: (value: ActiveLotsSort) => void;
}

const selectClassName =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none focus:border-accent";

export function ActiveLotsFilters({
  search,
  category,
  sort,
  categories,
  onSearchChange,
  onCategoryChange,
  onSortChange,
}: ActiveLotsFiltersProps) {
  return (
    <section className="space-y-4">
      <h2 className="font-semibold">Gerenciar lotes ativos</h2>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-[minmax(0,1fr)_200px_210px]">
        <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4">
          <Search size={19} className="shrink-0 text-text-muted" />

          <input
            type="search"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Buscar por título ou categoria..."
            aria-label="Buscar lotes ativos"
            className="w-full bg-transparent py-3 text-sm text-text outline-none placeholder:text-text-muted"
          />
        </div>

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

        <select
          value={sort}
          onChange={(event) =>
            onSortChange(event.target.value as ActiveLotsSort)
          }
          aria-label="Ordenar lotes"
          className={selectClassName}
        >
          <option value="ENDING_SOON">Encerrando primeiro</option>
          <option value="MOST_BIDS">Mais lances</option>
          <option value="HIGHEST_BID">Maior lance atual</option>
        </select>
      </div>
    </section>
  );
}