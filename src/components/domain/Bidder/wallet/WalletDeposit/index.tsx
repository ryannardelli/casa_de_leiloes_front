import { useState } from "react";
import {
ArrowDownToLine,
CircleDollarSign,
LoaderCircle,
} from "lucide-react";
import { formatCurrency } from "../../../../../utils/formatCurrency";
import { useWallet } from "../../../../../hooks/useWallet";
import { showMessage } from "../../../../ui/shared/Feedback/ShowMessage";

const depositOptions = [100, 250, 500, 1000];

export function WalletDeposit() {
const [amount, setAmount] = useState("250");

const { stateWallet, deposit } = useWallet();
const loading = stateWallet.loadingDeposit;
const error = stateWallet.errorDeposit;

const numericAmount = Number(amount);
const isValidAmount =
amount.trim() !== "" &&
Number.isFinite(numericAmount) &&
numericAmount >= 10 &&
numericAmount <= 10000;

async function handleSubmit(
event: React.FormEvent<HTMLFormElement>
) {
event.preventDefault();

if (!isValidAmount || loading) return;

showMessage.dismiss();

try {
  const response = await deposit(numericAmount);
  showMessage.success(response.message);

  setAmount("250");
} catch(err) {
 const errorMessage =
        err instanceof Error
          ? err.message
          : "Aconteceu um problema ao fazer o depósito.";

      console.error(err);

      showMessage.error(errorMessage);
}

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
        Adicione saldo à sua carteira.
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
          className="w-full bg-transparent px-3 py-3 text-text outline-none disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="250,00"
          disabled={loading}
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
            disabled={loading}
            onClick={() => setAmount(String(option))}
            className={`rounded-lg border px-3 py-2 cursor-pointer text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${
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

    {error && (
      <p
        role="alert"
        className="rounded-lg bg-red-500/10 p-3 text-sm text-red-500"
      >
        {error}
      </p>
    )}

    <button
      type="submit"
      disabled={!isValidAmount || loading}
      className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
    >
      {loading ? (
        <>
          <LoaderCircle size={18} className="animate-spin" />
          Processando depósito...
        </>
      ) : (
        <>
          <ArrowDownToLine size={18} />
          Adicionar saldo
        </>
      )}
    </button>

    <p className="text-center text-xs text-text-muted">
      Depósito realizado pela API da carteira. Esta operação não representa
      necessariamente um pagamento real.
    </p>
  </form>
</section>

);
}