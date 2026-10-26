import { usePublicLot } from "../../../../../../hooks/usePublicLot";
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
      <div className="rounded-xl border border-dashed border-gray-300 p-12 text-center">
        <p className="text-lg font-semibold text-gray-700">
          Nenhum lote disponível
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Novos lotes aparecerão aqui quando estiverem disponíveis.
        </p>
      </div>
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