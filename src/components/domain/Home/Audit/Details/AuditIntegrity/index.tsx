import { useMemo } from "react";
import {
  Copy,
  Fingerprint,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

interface AuditBid {
  id: number;
  lotId: number;
  bidderId: number;
  amount: number;
  previousHash?: string | null;
  hash?: string | null;
  createdAt?: string;
}

interface AuditIntegrityProps {
  bids?: AuditBid[] | null;
}

export function AuditIntegrity({ bids }: AuditIntegrityProps) {
  const formatDate = (value?: string | null) => {
    if (!value || Number.isNaN(new Date(value).getTime())) {
      return "Não disponível";
    }

    return new Date(value).toLocaleString("pt-BR", {
      dateStyle: "short",
      timeStyle: "medium",
    });
  };

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  const copyHash = (hash: string) => {
    void navigator.clipboard.writeText(hash);
  };

  const orderedBids = useMemo(
    () =>
      [...(bids ?? [])].sort(
        (a, b) =>
          new Date(a.createdAt ?? 0).getTime() -
          new Date(b.createdAt ?? 0).getTime()
      ),
    [bids]
  );

  const totalHashes = orderedBids.filter((bid) => bid.hash).length;

  const hasEvidence = totalHashes > 0;

  return (
    <section className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <div className="mb-6 flex items-start gap-3">
        <div className="rounded-xl bg-accent/10 p-3">
          <Fingerprint size={24} className="text-accent" />
        </div>

        <div>
          <h2 className="text-xl font-bold text-text">
            Integridade dos lances
          </h2>

          <p className="mt-1 text-sm leading-6 text-text-muted">
            Entenda como os registros são encadeados por hashes para ajudar
            a identificar alterações no histórico do lote.
          </p>
        </div>
      </div>

      {!hasEvidence ? (
        <div className="flex items-start gap-3 rounded-xl border border-border bg-muted/50 p-4">
          <ShieldAlert
            size={22}
            className="mt-0.5 shrink-0 text-text-muted"
          />

          <div>
            <p className="font-semibold text-text">
              Hashes indisponíveis
            </p>

            <p className="mt-1 text-sm leading-6 text-text-muted">
              Não foram encontrados hashes nos lances recebidos. Não é
              possível analisar o encadeamento dos registros com os dados
              disponíveis.
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-5 flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/5 p-4">
            <ShieldAlert
              size={21}
              className="mt-0.5 shrink-0 text-amber-600"
            />

            <div>
              <p className="font-semibold text-text">
                Evidências disponíveis
              </p>

              <p className="mt-1 text-sm leading-6 text-text-muted">
                Os hashes estão disponíveis para consulta. A verificação
                criptográfica completa ainda não foi confirmada por esta
                tela.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-text">
              Como funciona a cadeia de hashes?
            </h3>

            <p className="mt-2 text-sm leading-6 text-text-muted">
              Cada lance possui um hash próprio e guarda o hash anterior.
              Assim, os registros podem formar uma cadeia: se os dados de
              um lance forem alterados, o hash recalculado poderá deixar de
              corresponder ao valor armazenado, comprometendo também os
              vínculos seguintes.
            </p>

            <div className="mt-4 space-y-3">
              {orderedBids.map((bid, index) => {
                const previousBid = orderedBids[index - 1];

                const linkMatches =
                  index > 0 &&
                  Boolean(bid.previousHash) &&
                  Boolean(previousBid?.hash) &&
                  bid.previousHash === previousBid?.hash;

                return (
                  <div
                    key={bid.id}
                    className="relative rounded-xl border border-border p-4 sm:p-5"
                  >
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold text-text">
                          Lance #{bid.id}
                        </p>

                        <p className="mt-1 text-sm text-text-muted">
                          {formatCurrency(bid.amount)} ·{" "}
                          {formatDate(bid.createdAt)}
                        </p>
                      </div>

                      {index === 0 ? (
                        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-text-muted">
                          Primeiro registro exibido
                        </span>
                      ) : linkMatches ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700">
                          <ShieldCheck size={14} />
                          Hashes correspondem
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-700">
                          <ShieldAlert size={14} />
                          Vínculo não confirmado
                        </span>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="mb-2 flex items-center justify-between gap-2">
                          <div>
                            <p className="text-sm font-semibold text-text">
                              Hash anterior
                            </p>

                            <p className="mt-1 text-xs text-text-muted">
                              Referência ao registro anterior
                            </p>
                          </div>

                          {bid.previousHash && (
                            <button
                              type="button"
                              onClick={() => copyHash(bid.previousHash!)}
                              title="Copiar hash anterior"
                              aria-label="Copiar hash anterior"
                              className="shrink-0 rounded-lg p-2 text-text-muted transition hover:bg-muted hover:text-accent cursor-pointer"
                            >
                              <Copy size={16} />
                            </button>
                          )}
                        </div>

                        <code className="block break-all rounded-lg bg-muted/60 p-3 text-xs leading-5 text-text sm:text-sm">
                          {bid.previousHash || "Não disponível"}
                        </code>
                      </div>

                      <div>
                        <div className="mb-2 flex items-center justify-between gap-2">
                          <div>
                            <p className="text-sm font-semibold text-text">
                              Hash do registro
                            </p>

                            <p className="mt-1 text-xs text-text-muted">
                              Impressão digital criptográfica deste lance
                            </p>
                          </div>

                          {bid.hash && (
                            <button
                              type="button"
                              onClick={() => copyHash(bid.hash!)}
                              title="Copiar hash do registro"
                              aria-label="Copiar hash do registro"
                              className="shrink-0 rounded-lg p-2 text-text-muted transition hover:bg-muted hover:text-accent cursor-pointer"
                            >
                              <Copy size={16} />
                            </button>
                          )}
                        </div>

                        <code className="block break-all rounded-lg bg-muted/60 p-3 text-xs leading-5 text-text sm:text-sm">
                          {bid.hash || "Não disponível"}
                        </code>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-muted/50 p-4">
            <ShieldCheck
              size={21}
              className="mt-0.5 shrink-0 text-primary"
            />

            <div>
              <p className="font-semibold text-text">
                O que esses dados permitem verificar?
              </p>

             <p className="mt-1 text-sm leading-6 text-text-muted">
              Os hashes funcionam como impressões digitais dos registros, permitindo
              acompanhar a sequência dos lances e verificar a correspondência entre
              eles. Essa estrutura contribui para a transparência, a rastreabilidade
              e a segurança do histórico do leilão.
            </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
