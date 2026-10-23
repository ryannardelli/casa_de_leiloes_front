import { Search } from "lucide-react";

export type MyWinsFilterStatus = "ALL" | "CONFIRMED" | "PENDING";

interface MyWinsFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  status: MyWinsFilterStatus;
  onStatusChange: (value: MyWinsFilterStatus) => void;
}

export function MyWinsFilters({
  search,
  onSearchChange,
  status,
  onStatusChange,
}: MyWinsFiltersProps) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_220px]">
      <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4">
        <Search size={19} className="shrink-0 text-text-muted" />

        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Buscar arremate pelo nome..."
          aria-label="Buscar arremate pelo nome"
          className="w-full bg-transparent py-3 text-sm text-text outline-none placeholder:text-text-muted"
        />
      </div>

      <select
        value={status}
        onChange={(event) =>
          onStatusChange(event.target.value as MyWinsFilterStatus)
        }
        aria-label="Filtrar arremates por status"
        className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none focus:border-accent"
      >
        <option value="ALL">Todos os arremates</option>
        <option value="CONFIRMED">Confirmados</option>
        <option value="PENDING">Aguardando confirmação</option>
      </select>
    </div>
  );
}