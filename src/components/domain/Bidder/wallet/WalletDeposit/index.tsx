import { useState } from "react";
import { ArrowDownToLine, CircleDollarSign } from "lucide-react";
import { formatCurrency } from "../../../../../utils/formatCurrency";

interface WalletDepositProps {
  onDeposit: (amount: number) => void;
}

const depositOptions = [100, 250, 500, 1000];

export function WalletDeposit({ onDeposit }: WalletDepositProps) {
  const [amount, setAmount] = useState("250");

  const numericAmount = Number(amount);
  const isValidAmount =
    Number.isFinite(numericAmount) &&
    numericAmount >= 10 &&
    numericAmount <= 10000;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isValidAmount) return;

    onDeposit(numericAmount);
    setAmount("250");
  }

  return (
    <section className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-accent">
          <CircleDollarSign size={21} />
        </div>

        <div>
          <h2 className="font-semibold">Adicionar saldo</h2>
          <p className="text-sm text-text-muted">
            Simule um depósito na sua carteira.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div>
          <label
            htmlFor="deposit-amount"
            className="mb-2 block text-sm font-medium"
          >
            Valor do depósito
          </label>

          <div className="flex items-center rounded-xl border border-border bg-background px-3 focus-within:border-accent">
            <span className="text-sm text-text-muted">R$</span>

            <input
              id="deposit-amount"
              type="number"
              min="10"
              max="10000"
              step="0.01"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              className="w-full bg-transparent px-3 py-3 text-text outline-none"
              placeholder="250,00"
              required
            />
          </div>

          <p className="mt-2 text-xs text-text-muted">
            Valor mínimo de R$ 10,00 e máximo de R$ 10.000,00.
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium">
            Valores sugeridos
          </p>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {depositOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setAmount(String(option))}
                className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                  numericAmount === option
                    ? "border-accent bg-muted text-accent"
                    : "border-border text-text-muted hover:bg-muted hover:text-text"
                }`}
              >
                {formatCurrency(option)}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={!isValidAmount}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ArrowDownToLine size={18} />
          Adicionar saldo simulado
        </button>

        <p className="text-center text-xs text-text-muted">
          Operação demonstrativa. Nenhum pagamento real será realizado.
        </p>
      </form>
    </section>
  );
}