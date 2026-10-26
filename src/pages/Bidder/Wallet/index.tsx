import { useState } from "react";
import { initialTransactions, initialWallet, type WalletTransaction } from "../../../mocks/bidder/wallet.mock";
import { WalletHeader } from "../../../components/domain/Bidder/wallet/WalletHeader";
import { WalletBalance } from "../../../components/domain/Bidder/wallet/WalletBalance";
import { WalletStats } from "../../../components/domain/Bidder/wallet/WalletStats";
import { WalletDeposit } from "../../../components/domain/Bidder/wallet/WalletDeposit";
import { WalletTransactions } from "../../../components/domain/Bidder/wallet/WalletTransactions";

export function Wallet() {
  const [availableBalance, setAvailableBalance] = useState(
    initialWallet.availableBalance,
  );

  const [committedBalance] = useState(
    initialWallet.committedBalance,
  );

  const [transactions, setTransactions] =
    useState<WalletTransaction[]>(initialTransactions);

  function handleDeposit(amount: number) {
    setAvailableBalance((currentBalance) => currentBalance + amount);

    const transaction: WalletTransaction = {
      id: crypto.randomUUID(),
      type: "DEPOSIT",
      description: "Depósito simulado",
      amount,
      date: new Date().toISOString(),
    };

    setTransactions((currentTransactions) => [
      transaction,
      ...currentTransactions,
    ]);
  }

  return (
    <main className="min-h-screen bg-background px-4 py-6 text-text sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <WalletHeader />

        <WalletBalance
          availableBalance={availableBalance}
          committedBalance={committedBalance}
        />

        <WalletStats
          availableBalance={availableBalance}
          committedBalance={committedBalance}
        />

        <section className="grid grid-cols-1 items-start gap-6">
          <div className="xl:col-span-2">
            <WalletDeposit onDeposit={handleDeposit} />
          </div>

          <div className="xl:col-span-3">
            <WalletTransactions transactions={transactions} />
          </div>
        </section>
      </div>
    </main>
  );
}