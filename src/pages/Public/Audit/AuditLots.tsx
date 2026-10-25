import { useParams } from "react-router-dom";
import { auctionAuditMock } from "../../../mocks/home/audit.mock";
import { AuditSummary } from "../../../components/domain/Home/Audit/Details/AuditSummary";
import { AuditLotDetails } from "../../../components/domain/Home/Audit/Details/AuditLotDetails";
import { AuditBidHistory } from "../../../components/domain/Home/Audit/Details/AuditBidHistory";
import { AuditIntegrity } from "../../../components/domain/Home/Audit/Details/AuditIntegrity";

export function AuditLots() {
  const { id } = useParams<{ id: string }>();

  const audit = id === auctionAuditMock.lot.id ? auctionAuditMock : null;

  if (!audit) {
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

      <AuditSummary integrity={audit.integrity} />

      <AuditLotDetails lot={audit.lot} />

      <AuditBidHistory bids={audit.bids} />

      <AuditIntegrity integrity={audit.integrity} />
    </div>
  );
}