import { Search } from "lucide-react";
import type { BidStatusFilter } from "../../myBids/MyBidsFilters";

export type TabId = "ALL" | BidStatusFilter;

interface LotFiltersProps {
  activeTab: TabId;
  search: string;
  onTabChange: (tab: TabId) => void;
  onSearchChange: (search: string) => void;
}

const tabs: { id: TabId; label: string }[] = [
  { id: "ALL", label: "Todos" },
  { id: "LIVE", label: "Ao vivo" },
  { id: "SCHEDULED", label: "Agendados" },
  { id: "CLOSED", label: "Encerrados" },
];

export function LotFilters({
  activeTab,
  search,
  onTabChange,
  onSearchChange,
}: LotFiltersProps) {
  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div className="relative w-full">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
          />
          <input
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Buscar por nome do lote..."
            className="w-full rounded-xl border border-border bg-surface py-3 pl-10 pr-4 text-sm text-text outline-none placeholder:text-text-muted focus:border-accent"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 border-b border-border sm:flex-row sm:items-center sm:justify-between">
        <nav className="flex gap-5 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative cursor-pointer shrink-0 pb-3 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "text-accent"
                  : "text-text-muted hover:text-text"
              }`}
            >
              {tab.label}

              {activeTab === tab.id && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-accent" />
              )}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}