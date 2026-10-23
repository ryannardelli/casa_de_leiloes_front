import { Gavel } from "lucide-react";
import type { ActiveLot } from "../../../../../mocks/auctioneer/active-lots.mock";
import { ActiveLotCard } from "../ActiveLotCard";

interface ActiveLotsListProps {
  lots: ActiveLot[];
}

export function ActiveLotsList({ lots }: ActiveLotsListProps) {
  if (lots.length === 0) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-dashed border-border bg-surface px-6 py-14 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted text-text-muted">
          <Gavel size={26} />
        </div>

        <h3 className="mt-4 text-lg font-semibold">
          Nenhum leilão em andamento
        </h3>

        <p className="mt-2 max-w-sm text-sm leading-6 text-text-muted">
          Você não possui lotes ativos com os filtros selecionados. Seus
          próximos leilões aparecerão aqui quando estiverem em andamento.
        </p>
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {lots.map((lot) => (
        <ActiveLotCard key={lot.id} lot={lot} />
      ))}
    </section>
  );
}