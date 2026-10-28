import { Search } from "lucide-react";

export type MyLotsFilterStatus =
  | "ALL"
  | "LIVE"
  | "SCHEDULED"
  | "CLOSED"
  | "CANCELED";

interface MyLotsFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  status: MyLotsFilterStatus;
  onStatusChange: (value: MyLotsFilterStatus) => void;
}

export function MyLotsFilters({
  search,
  onSearchChange,
  status,
  onStatusChange,
}: MyLotsFiltersProps) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_230px]">
      <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4">
        <Search size={19} className="shrink-0 text-text-muted" />

        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Buscar lote..."
          aria-label="Buscar lote"
          className="w-full bg-transparent py-3 text-sm text-text outline-none placeholder:text-text-muted"
        />
      </div>

      <select
        value={status}
        onChange={(event) =>
          onStatusChange(event.target.value as MyLotsFilterStatus)
        }
        aria-label="Filtrar lotes por status"
        className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none focus:border-accent cursor-pointer"
      >
        <option value="ALL">Todos os lotes</option>
        <option value="LIVE">Em andamento</option>
        <option value="SCHEDULED">Agendados</option>
        <option value="CLOSED">Encerrados</option>
        <option value="CANCELLED">Cancelados</option>
      </select>
    </div>
  );
}