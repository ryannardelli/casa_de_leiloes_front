import { useParams } from "react-router-dom";
import { usePublicLot } from "../../../hooks/usePublicLot";
import { LoadingAuth } from "../../../components/ui/shared/Loading/general/LoadingAuth";
import { AuditLotDetails } from "../../../components/domain/Home/Audit/Details/AuditLotDetails";
import { AuditBidHistory } from "../../../components/domain/Home/Audit/Details/AuditBidHistory";
import { AuditIntegrity } from "../../../components/domain/Home/Audit/Details/AuditIntegrity";
import { BackButton } from "../../../components/ui/shared/Button/BackButton/index.tsx";
import { useEffect } from "react";
import { useBids } from "../../../hooks/useBids.ts";

export function AuditLots() {
  const { id } = useParams<{ id: string }>();

  const { statePublicLots } = usePublicLot();
  const { lots, loadingLots } = statePublicLots;

   const {
    loadBidsById,
    stateBids,
  } = useBids();

  const { selectedLot, loadingLotById } = stateBids;

  useEffect(() => {
    if (id) {
      loadBidsById(Number(id)).catch(() => {});
    }
  }, [id, loadBidsById]);

  const lot = lots.find((item) => item.id === Number(id));

  if (loadingLots || loadingLotById) {
    return <LoadingAuth />;
  }

  if (!lot) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Auditoria não encontrada
        </h1>

        <p className="mt-2 text-gray-500">
          Não foi possível encontrar a auditoria do lote solicitado.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl space-y-6 p-6">
      <BackButton />

      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Auditoria do lote
        </h1>

        <p className="mt-2 text-gray-500">
          Lote: {id}
        </p>

        <p className="mt-2 text-gray-500">
          Consulte o histórico completo de lances e as evidências de integridade.
        </p>
      </div>

      <AuditLotDetails
        lot={lot}
        totalBids={lots.length}
      />

      <AuditBidHistory bids={selectedLot ?? []} />

      <AuditIntegrity bids={selectedLot ?? []} />
    </div>
  );
}