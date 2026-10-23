import {
  ArrowDownLeft,
  ArrowUpRight,
  LockKeyhole,
  ReceiptText,
} from "lucide-react";
import type { WalletTransaction } from "../../../../../mocks/bidder/wallet.mock";
import { formatCurrency } from "../../../../../utils/formatCurrency";

interface WalletTransactionsProps {
  transactions: WalletTransaction[];
}

const transactionConfig = {
  DEPOSIT: {
    label: "Depósito",
    icon: ArrowDownLeft,
    className: "bg-muted text-accent",
  },
  BID_RESERVED: {
    label: "Valor reservado",
    icon: LockKeyhole,
    className: "bg-muted text-text-muted",
  },
  BID_RELEASED: {
    label: "Valor liberado",
    icon: ArrowUpRight,
    className: "bg-muted text-gold",
  },
};

export function WalletTransactions({
  transactions,
}: WalletTransactionsProps) {
  return (
    <section className="rounded-2xl border border-border bg-surface">
      <div className="flex items-center gap-3 border-b border-border p-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-accent">
          <ReceiptText size={20} />
        </div>

        <div>
          <h2 className="font-semibold">Movimentações</h2>
          <p className="text-sm text-text-muted">
            Histórico das operações da carteira.
          </p>
        </div>
      </div>

      {transactions.length > 0 ? (
        <div className="divide-y divide-border">
          {transactions.map((transaction) => {
            const config = transactionConfig[transaction.type];
            const Icon = config.icon;

            return (
              <div
                key={transaction.id}
                className="flex items-center gap-3 p-4 sm:px-5"
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${config.className}`}
                >
                  <Icon size={19} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">
                    {transaction.description}
                  </p>

                  <p className="mt-1 text-xs text-text-muted">
                    {new Date(transaction.date).toLocaleString("pt-BR", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>

                <div className="shrink-0 text-right">
                  <p
                    className={`text-sm font-semibold ${
                      transaction.amount > 0
                        ? "text-accent"
                        : "text-text"
                    }`}
                  >
                    {transaction.amount > 0 ? "+" : ""}
                    {formatCurrency(transaction.amount)}
                  </p>

                  <p className="mt-1 text-xs text-text-muted">
                    {config.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center px-6 py-12 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-text-muted">
            <ReceiptText size={22} />
          </div>

          <h3 className="mt-4 font-semibold">
            Nenhuma movimentação
          </h3>

          <p className="mt-2 max-w-sm text-sm text-text-muted">
            Quando você adicionar saldo ou participar de um leilão,
            suas movimentações aparecerão aqui.
          </p>
        </div>
      )}
    </section>
  );
}