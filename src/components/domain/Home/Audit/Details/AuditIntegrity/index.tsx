import { Copy, Fingerprint, ShieldAlert, ShieldCheck } from "lucide-react";

interface AuditIntegrityProps {
  integrity?: {
    algorithm?: string;
    recordsChecked?: number;
    verifiedAt?: string | null;
    initialHash?: string | null;
    finalHash?: string | null;
  } | null;
}

export function AuditIntegrity({ integrity }: AuditIntegrityProps) {
  const formatDate = (value?: string | null) => {
    if (!value || Number.isNaN(new Date(value).getTime())) {
      return "Não disponível";
    }

    return new Date(value).toLocaleString("pt-BR", {
      dateStyle: "short",
      timeStyle: "medium",
    });
  };

  const copyHash = (hash: string) => {
    void navigator.clipboard.writeText(hash);
  };

  const hasEvidence = Boolean(
    integrity?.algorithm ||
    integrity?.recordsChecked !== undefined ||
    integrity?.verifiedAt ||
    integrity?.initialHash ||
    integrity?.finalHash
  );

  return (
    <section className="rounded-2xl border border-border bg-surface p-6">
      <div className="mb-5 flex items-center gap-3">
        <Fingerprint size={21} className="text-accent" />
        <div>
          <h2 className="text-lg font-bold text-text">
            Evidências de integridade
          </h2>
          <p className="mt-1 text-sm text-text-muted">
            Informações utilizadas na verificação dos registros.
          </p>
        </div>
      </div>

      {!hasEvidence ? (
        <div className="flex items-start gap-3 rounded-xl border border-border bg-muted/50 p-4">
          <ShieldAlert size={21} className="mt-0.5 shrink-0 text-text-muted" />
          <div>
            <p className="font-semibold text-text">
              Evidências não disponíveis
            </p>
            <p className="mt-1 text-sm leading-6 text-text-muted">
              A API atual fornece os dados do lote, mas não retorna hashes,
              checkpoints ou resultados de verificação criptográfica.
              Não é possível confirmar a integridade dos registros apenas
              com essas informações.
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-muted/50 p-4">
              <p className="text-sm text-text-muted">
                Algoritmo informado
              </p>
              <p className="mt-2 font-semibold text-text">
                {integrity?.algorithm ?? "Não informado"}
              </p>
            </div>

            <div className="rounded-xl bg-muted/50 p-4">
              <p className="text-sm text-text-muted">
                Registros verificados
              </p>
              <p className="mt-2 font-semibold text-text">
                {integrity?.recordsChecked ?? "Não informado"}
              </p>
            </div>

            <div className="rounded-xl bg-muted/50 p-4">
              <p className="text-sm text-text-muted">
                Última verificação
              </p>
              <p className="mt-2 text-sm font-semibold text-text">
                {formatDate(integrity?.verifiedAt)}
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            {[
              { label: "Hash inicial", value: integrity?.initialHash },
              { label: "Hash final", value: integrity?.finalHash },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border p-4"
              >
                <p className="text-sm text-text-muted">{item.label}</p>

                <div className="mt-2 flex items-center justify-between gap-3">
                  <code className="break-all text-sm text-text">
                    {item.value || "Não disponível"}
                  </code>

                  {item.value && (
                    <button
                      type="button"
                      onClick={() => copyHash(item.value!)}
                      title={`Copiar ${item.label.toLowerCase()}`}
                      aria-label={`Copiar ${item.label.toLowerCase()}`}
                      className="shrink-0 rounded-lg p-2 text-text-muted transition hover:bg-muted hover:text-accent"
                    >
                      <Copy size={16} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-xl border border-border bg-muted/50 p-4 text-sm text-text-muted">
            <ShieldCheck size={20} className="mt-0.5 shrink-0 text-primary" />
            <p>
              Os dados apresentados correspondem às evidências recebidas
              do backend. A confirmação da integridade depende da validação
              efetiva dessas evidências.
            </p>
          </div>
        </>
      )}
    </section>
  );
}
