import { Search } from "lucide-react";

export type BidStatusFilter =
  | "ALL"
  | "LIVE"
  | "SCHEDULED"
  | "CLOSED"
  | "CANCELLED";

interface MyBidsFiltersProps {
  search: string;
  status: BidStatusFilter;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: BidStatusFilter) => void;
}

const tabs: { id: BidStatusFilter; label: string }[] = [
{ id: "ALL", label: "Todos" },
{ id: "LIVE", label: "Ao vivo" },
{ id: "SCHEDULED", label: "Agendados" },
{ id: "CLOSED", label: "Encerrados" },
];

export function MyBidsFilters({
  search,
  status,
  onSearchChange,
  onStatusChange,
}: MyBidsFiltersProps) {
return (
  <section className="space-y-4">
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

  <nav className="flex gap-5 overflow-x-auto border-b border-border">
    {tabs.map((tab) => (
      <button
        key={tab.id}
        onClick={() => onStatusChange(tab.id)}
        className={`relative cursor-pointer shrink-0 pb-3 text-sm font-medium transition-colors ${
          status === tab.id
            ? "text-accent"
            : "text-text-muted hover:text-text"
        }`}
      >
        {tab.label}

        {status === tab.id && (
          <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-accent" />
        )}
      </button>
    ))}
  </nav>
</section>

);
}