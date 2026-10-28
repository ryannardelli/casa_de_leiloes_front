import { CheckCircle2, Clock3, ShieldCheck, ShieldX } from "lucide-react";

interface AuditSummaryProps {
  integrity?: {
    status: "VERIFIED" | "TAMPERED" | "PENDING";
    message?: string;
    validRecords?: number;
    invalidRecords?: number;
  } | null;
}

export function AuditSummary({ integrity }: AuditSummaryProps) {
  const isVerified = integrity?.status === "VERIFIED";
  const isTampered = integrity?.status === "TAMPERED";
  const hasResult = Boolean(integrity);

  return (
    <section
      className={`rounded-2xl border p-6 ${
        isVerified
          ? "border-emerald-200 bg-emerald-50"
          : isTampered
            ? "border-red-200 bg-red-50"
            : "border-border bg-surface"
      }`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
            isVerified
              ? "bg-emerald-100 text-emerald-700"
              : isTampered
                ? "bg-red-100 text-red-700"
                : "bg-muted text-text-muted"
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
          <span className="text-xs font-bold uppercase tracking-wider text-text-muted">
            Resultado da auditoria
          </span>

          <h2 className="mt-1 text-xl font-bold text-text">
            {isVerified
              ? "Histórico íntegro"
              : isTampered
                ? "Inconsistência detectada"
                : "Verificação indisponível"}
          </h2>

          <p className="mt-2 text-sm leading-6 text-text-muted">
            {integrity?.message ??
              "A API atual não fornece evidências suficientes para confirmar a integridade criptográfica dos registros."}
          </p>

          {hasResult && (
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-text-muted">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} />
                {integrity.validRecords ?? 0} registros válidos
              </span>

              <span>
                {integrity.invalidRecords ?? 0} registros inválidos
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
