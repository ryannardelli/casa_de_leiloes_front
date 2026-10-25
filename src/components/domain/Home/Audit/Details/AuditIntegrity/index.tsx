import { Copy, Fingerprint, ShieldCheck } from "lucide-react";
import type { AuctionAudit } from "../../../../../../mocks/home/audit.mock";

interface AuditIntegrityProps {
  integrity: AuctionAudit["integrity"];
}

export function AuditIntegrity({ integrity }: AuditIntegrityProps) {
  const formatDate = (value: string) =>
    new Date(value).toLocaleString("pt-BR", {
      dateStyle: "short",
      timeStyle: "medium",
    });

  const copyHash = (hash: string) => {
    void navigator.clipboard.writeText(hash);
  };

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6">
      <div className="mb-5 flex items-center gap-3">
        <Fingerprint size={21} className="text-gray-600" />
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            Evidências de integridade
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Informações utilizadas na verificação dos registros.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-sm text-gray-500">Algoritmo informado</p>
          <p className="mt-2 font-semibold text-gray-900">
            {integrity.algorithm}
          </p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-sm text-gray-500">Registros verificados</p>
          <p className="mt-2 font-semibold text-gray-900">
            {integrity.recordsChecked}
          </p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-sm text-gray-500">Última verificação</p>
          <p className="mt-2 text-sm font-semibold text-gray-900">
            {formatDate(integrity.verifiedAt)}
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-4">
        {[
          { label: "Hash inicial", value: integrity.initialHash },
          { label: "Hash final", value: integrity.finalHash },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-gray-200 p-4"
          >
            <p className="text-sm text-gray-500">{item.label}</p>

            <div className="mt-2 flex items-center justify-between gap-3">
              <code className="break-all text-sm text-gray-800">
                {item.value}
              </code>

              <button
                type="button"
                onClick={() => copyHash(item.value)}
                title={`Copiar ${item.label.toLowerCase()}`}
                aria-label={`Copiar ${item.label.toLowerCase()}`}
                className="shrink-0 rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
              >
                <Copy size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-start gap-3 rounded-xl bg-blue-50 p-4 text-sm text-blue-900">
        <ShieldCheck size={20} className="mt-0.5 shrink-0" />
        <p>
          A confirmação de integridade depende da validação criptográfica dos
          registros pelo backend. Os hashes exibidos neste exemplo são
          fictícios.
        </p>
      </div>
    </section>
  );
}