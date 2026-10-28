import { ShieldCheck } from "lucide-react";
import { AuditLotList } from "../../../components/domain/Home/Audit/List/AuditLotList";

export function Audit() {    
  return (
    <div className="mx-auto max-w-7xl space-y-6 p-6">
      <div>
        <div className="mb-3 flex items-center gap-2">
          <ShieldCheck size={20} className="text-blue-600" />

          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Transparência pública
          </span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900">
          Auditoria de leilões
        </h1>

        <p className="mt-2 text-gray-500">
          Consulte o histórico de lances e verifique a integridade dos registros
          dos lotes.
        </p>
      </div>

      <AuditLotList />
    </div>
  );
}