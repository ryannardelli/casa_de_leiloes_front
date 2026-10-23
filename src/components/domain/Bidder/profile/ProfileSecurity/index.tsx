import { KeyRound, ShieldCheck } from "lucide-react";

export function ProfileSecurity() {
  return (
    <section className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-accent">
          <ShieldCheck size={20} />
        </div>

        <div>
          <h2 className="font-semibold">Segurança da conta</h2>
          <p className="text-sm text-text-muted">
            Proteção e acesso à sua conta.
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-start gap-3 rounded-xl border border-border p-4">
        <KeyRound size={20} className="mt-0.5 shrink-0 text-text-muted" />

        <div>
          <p className="text-sm font-medium">Senha de acesso</p>
          <p className="mt-1 text-sm leading-6 text-text-muted">
            Utilize uma senha forte e exclusiva. A alteração de senha
            deve ser realizada por um fluxo autenticado e validado
            pelo servidor.
          </p>
        </div>
      </div>
    </section>
  );
}