import { KeyRound, ShieldCheck } from "lucide-react";

export function ProfileSecurity() {
  return (
    <section className="rounded-2xl border border-border bg-surface p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-xl bg-gold/15 p-3 text-gold">
          <ShieldCheck size={22} />
        </div>

        <div>
          <h2 className="font-bold text-text">
            Segurança da conta
          </h2>

          <p className="text-sm text-text-muted">
            Informações sobre a proteção do seu acesso.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3 rounded-xl border border-border bg-background p-4">
        <KeyRound size={20} className="mt-0.5 shrink-0 text-text-muted" />

        <div>
          <p className="text-sm font-semibold text-text">
            Senha e autenticação
          </p>

          <p className="mt-1 text-sm leading-6 text-text-muted">
            Utilize uma senha forte e exclusiva. A alteração de senha
            deverá ser realizada pelo fluxo de autenticação da plataforma.
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-start gap-3 rounded-xl border border-border bg-background p-4">
        <ShieldCheck
          size={20}
          className="mt-0.5 shrink-0 text-text-muted"
        />

        <div>
          <p className="text-sm font-semibold text-text">
            Permissões da conta
          </p>

          <p className="mt-1 text-sm leading-6 text-text-muted">
            As permissões de leiloeiro e licitante devem ser verificadas
            pelo servidor em cada operação protegida.
          </p>
        </div>
      </div>
    </section>
  );
}