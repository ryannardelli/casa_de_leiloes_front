import { Search } from "lucide-react";
import type { AuctionResultStatus } from "../../../../../mocks/auctioneer/results.mock";

export type ResultsStatusFilter = "ALL" | AuctionResultStatus;

interface ResultsFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export function ResultsFilters({
  search,
  onSearchChange,
}: ResultsFiltersProps) {
  return (
    <section className="space-y-4">
      <div className="grid grid-cols-1 gap-3">
        <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4">
          <Search size={19} className="shrink-0 text-text-muted" />

          <input
            type="search"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Buscar resultados..."
            aria-label="Buscar resultados"
            className="w-full bg-transparent py-3 text-sm text-text outline-none placeholder:text-text-muted"
          />
        </div>
      </div>
    </section>
  );
}