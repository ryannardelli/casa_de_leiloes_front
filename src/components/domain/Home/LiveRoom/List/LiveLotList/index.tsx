import { Radio } from "lucide-react";
import { usePublicLot } from "../../../../../../hooks/usePublicLot";
import { LotEmptyState } from "../../../../../ui/shared/Feedback/LotEmptyState";
import { LiveLotCardSkeleton } from "../../../../../ui/shared/Loading/home/LiveRoom/LiveLotCardSkeleton";
import { LiveLotCard } from "../LiveLotCard";

export function LiveLotList() {
  const { statePublicLots } = usePublicLot();
  const { liveLots, loadingLots } = statePublicLots;

  if (loadingLots) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: liveLots.length }).map((_, index) => (
          <LiveLotCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (liveLots.length === 0) {
    return (
     <LotEmptyState
        icon={Radio}
        title="Nenhum leilão ao vivo"
        description="No momento, não há lotes recebendo lances. Confira novamente mais tarde."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {liveLots.map((lot) => (
        <LiveLotCard key={lot.id} lot={lot} />
      ))}
    </div>
  );
}