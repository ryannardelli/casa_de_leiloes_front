import { useMemo, useState } from "react";
import { PackageSearch } from "lucide-react";
import type { MyLot, MyLotStatus } from "../../../../../mocks/auctioneer/my-lots.mock";
import { MyLotsFilters, type MyLotsFilterStatus } from "../MyLotsFilters";
import { MyLotCard } from "../MyLotCard";

interface MyLotsListProps {
  lots: MyLot[];
  onCancel: (lotId: string) => void;
}

export function MyLotsList({ lots, onCancel }: MyLotsListProps) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<MyLotsFilterStatus>("ALL");

  const filteredLots = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return lots.filter((lot) => {
      const matchesSearch =
        lot.title.toLowerCase().includes(normalizedSearch) ||
        lot.category.toLowerCase().includes(normalizedSearch) ||
        lot.id.toLowerCase().includes(normalizedSearch);

      const matchesStatus =
        status === "ALL" || lot.status === (status as MyLotStatus);

      return matchesSearch && matchesStatus;
    });
  }, [lots, search, status]);

  return (
    <section className="space-y-5">
      <div>
        <h2 className="text-lg font-semibold">
          Seus lotes cadastrados
        </h2>

        <p className="mt-1 text-sm text-text-muted">
          Consulte os detalhes e acompanhe a situação de cada lote.
        </p>
      </div>

      <MyLotsFilters
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
      />

      {filteredLots.length > 0 ? (
        <div className="space-y-4">
          {filteredLots.map((lot) => (
            <MyLotCard
              key={lot.id}
              lot={lot}
              onCancel={onCancel}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center rounded-2xl border border-dashed border-border bg-surface px-6 py-12 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-text-muted">
            <PackageSearch size={22} />
          </div>

          <h3 className="mt-4 font-semibold">
            Nenhum lote encontrado
          </h3>

          <p className="mt-2 max-w-sm text-sm leading-6 text-text-muted">
            Não encontramos lotes com esses filtros. Tente outra
            busca ou cadastre um novo lote.
          </p>
        </div>
      )}
    </section>
  );
}