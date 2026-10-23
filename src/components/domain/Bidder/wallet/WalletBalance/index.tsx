import { Eye, Wallet } from "lucide-react";import { formatCurrency } from "../../../../../utils/formatCurrency";
;

interface WalletBalanceProps {
  availableBalance: number;
  committedBalance: number;
}

export function WalletBalance({
  availableBalance,
  committedBalance,
}: WalletBalanceProps) {
  const totalBalance = availableBalance + committedBalance;

  return (
    <section className="relative overflow-hidden rounded-2xl bg-primary p-6 text-surface shadow-sm sm:p-8">
      <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />
      <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full border border-white/10" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 text-sm text-surface/70">
          <Wallet size={18} />
          Saldo total da carteira
          <Eye size={16} />
        </div>

        <p className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          {formatCurrency(totalBalance)}
        </p>

        <p className="mt-2 text-sm text-surface/70">
          Saldo disponível + saldo comprometido
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 border-t border-white/15 pt-5 sm:grid-cols-2">
          <div>
            <p className="text-sm text-surface/70">
              Disponível para novos lances
            </p>

            <p className="mt-1 text-xl font-semibold text-gold">
              {formatCurrency(availableBalance)}
            </p>
          </div>

          <div>
            <p className="text-sm text-surface/70">
              Comprometido em lances
            </p>

            <p className="mt-1 text-xl font-semibold">
              {formatCurrency(committedBalance)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}