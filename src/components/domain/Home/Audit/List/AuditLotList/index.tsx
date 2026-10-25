import type { ActiveLot } from "../../../../../../mocks/auctioneer/active-lots.mock";
import { AuditLotCard } from "../AuditLotCard";

interface AuditLotListProps {
  lots: ActiveLot[];
}

export function AuditLotList({ lots }: AuditLotListProps) {
  if (lots.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-gray-300 p-12 text-center">
        <p className="text-lg font-semibold text-gray-700">
          Nenhum lote disponível para auditoria
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Os lotes disponíveis para consulta pública aparecerão aqui.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {lots.map((lot) => (
        <AuditLotCard key={lot.id} lot={lot} />
      ))}
    </div>
  );
}