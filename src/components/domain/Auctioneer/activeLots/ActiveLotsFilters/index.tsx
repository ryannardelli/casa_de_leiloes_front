import { Search } from "lucide-react";

interface ActiveLotsFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export function ActiveLotsFilters({
  search,
  onSearchChange,
}: ActiveLotsFiltersProps) {
  return (
    <section className="space-y-4">
      <h2 className="font-semibold">Gerenciar lotes ativos</h2>

      <div className="grid grid-cols-1 gap-3">
        <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4">
          <Search size={19} className="shrink-0 text-text-muted" />

          <input
            type="search"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Buscar lote ativos..."
            aria-label="Buscar lotes ativos"
            className="w-full bg-transparent py-3 text-sm text-text outline-none placeholder:text-text-muted"
          />
        </div>
      </div>
    </section>
  );
}