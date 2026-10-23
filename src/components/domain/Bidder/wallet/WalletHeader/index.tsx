import { Wallet } from "lucide-react";

export function WalletHeader() {
  return (
    <header>
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-accent">
          <Wallet size={22} />
        </div>

        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Minha carteira
          </h1>
        </div>
      </div>

      <p className="mt-3 max-w-2xl text-sm leading-6 text-text-muted">
        Gerencie seu saldo, acompanhe os valores comprometidos
        em lances e consulte suas movimentações.
      </p>
    </header>
  );
}