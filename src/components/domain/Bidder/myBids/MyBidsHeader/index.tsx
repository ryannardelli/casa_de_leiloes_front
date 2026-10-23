import { Gavel } from "lucide-react";

export function MyBidsHeader() {
  return (
    <header>
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-accent">
          <Gavel size={22} />
        </div>

        <div>
          <p className="text-sm text-text-muted">
            Área do licitante
          </p>

          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Meus lances
          </h1>
        </div>
      </div>

      <p className="mt-3 text-sm text-text-muted">
        Acompanhe seus lances, veja sua posição e saiba quais leilões
        precisam da sua atenção.
      </p>
    </header>
  );
}