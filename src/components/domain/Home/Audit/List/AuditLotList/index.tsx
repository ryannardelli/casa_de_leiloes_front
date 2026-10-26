import { ShieldCheck } from "lucide-react";
import { usePublicLot } from "../../../../../../hooks/usePublicLot";
import { LotEmptyState } from "../../../../../ui/shared/Feedback/LotEmptyState";
import { AuditLotCardSkeleton } from "../../../../../ui/shared/Loading/home/Audit/AuditLotCardSkeleton";
import { AuditLotCard } from "../AuditLotCard";

export function AuditLotList() {
   const { statePublicLots } = usePublicLot();
    const { lots, loadingLots } = statePublicLots;
  
    if (loadingLots) {
      return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: lots.length }).map((_, index) => (
            <AuditLotCardSkeleton key={index} />
          ))}
        </div>
      );
    }

  if (lots.length === 0) {
    return (
      <LotEmptyState
        icon={ShieldCheck}
        title="Nenhum lote disponível para auditoria"
        description="Os lotes disponíveis para consulta pública aparecerão aqui."
      />
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