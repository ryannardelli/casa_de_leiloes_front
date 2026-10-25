import { CheckCircle2, Clock3, ShieldCheck, ShieldX } from "lucide-react";
import type { AuctionAudit } from "../../../../../../mocks/home/audit.mock";

interface AuditSummaryProps {
  integrity: AuctionAudit["integrity"];
}

export function AuditSummary({ integrity }: AuditSummaryProps) {
  const isVerified = integrity.status === "VERIFIED";
  const isTampered = integrity.status === "TAMPERED";

  return (
    <section
      className={`rounded-2xl border p-6 ${
        isVerified
          ? "border-emerald-200 bg-emerald-50"
          : isTampered
            ? "border-red-200 bg-red-50"
            : "border-amber-200 bg-amber-50"
      }`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
            isVerified
              ? "bg-emerald-100 text-emerald-700"
              : isTampered
                ? "bg-red-100 text-red-700"
                : "bg-amber-100 text-amber-700"
          }`}
        >
          {isVerified ? (
            <ShieldCheck size={26} />
          ) : isTampered ? (
            <ShieldX size={26} />
          ) : (
            <Clock3 size={26} />
          )}
        </div>

        <div className="flex-1">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Resultado da auditoria
          </span>

          <h2 className="mt-1 text-xl font-bold text-gray-900">
            {isVerified
              ? "Histórico íntegro"
              : isTampered
                ? "Inconsistência detectada"
                : "Verificação pendente"}
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            {integrity.message}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} />
              {integrity.validRecords} registros válidos
            </span>

            <span>
              {integrity.invalidRecords} registros inválidos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}