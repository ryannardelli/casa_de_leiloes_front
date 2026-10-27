import { Search } from "lucide-react";

interface MyBidsFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export function MyBidsFilters({
  search,
  onSearchChange,
}: MyBidsFiltersProps) {
  return (
    <section className="flex flex-col gap-3 sm:flex-row">
      <div className="relative flex-1">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
        />

        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Buscar por nome do lote..."
          className="w-full rounded-xl border border-border bg-surface py-3 pl-10 pr-4 text-sm text-text outline-none transition placeholder:text-text-muted focus:border-accent"
        />
      </div>
    </section>
  );
}