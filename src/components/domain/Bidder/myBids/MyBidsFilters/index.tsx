import { Search } from "lucide-react";

interface MyBidsFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  status: string;
  onStatusChange: (value: string) => void;
}

export function MyBidsFilters({
  search,
  onSearchChange,
  status,
  onStatusChange,
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

      <select
        value={status}
        onChange={(event) => onStatusChange(event.target.value)}
        className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none focus:border-accent"
      >
        <option value="ALL">Todos os lances</option>
        <option value="WINNING">Liderando</option>
        <option value="OUTBID">Superados</option>
        <option value="WON">Arremates ganhos</option>
        <option value="LOST">Não arrematados</option>
      </select>
    </section>
  );
}