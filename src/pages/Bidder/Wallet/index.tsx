import { WalletHeader } from "../../../components/domain/Bidder/wallet/WalletHeader";
import { WalletBalance } from "../../../components/domain/Bidder/wallet/WalletBalance";
import { WalletStats } from "../../../components/domain/Bidder/wallet/WalletStats";
import { WalletDeposit } from "../../../components/domain/Bidder/wallet/WalletDeposit";
import { WalletTransactions } from "../../../components/domain/Bidder/wallet/WalletTransactions";

export function Wallet() {
  return (
    <main className="min-h-screen bg-background px-4 py-6 text-text sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <WalletHeader />

        <WalletBalance />

        <WalletStats />

        <section className="grid grid-cols-1 items-start gap-6">
          <div className="xl:col-span-2">
            <WalletDeposit />
          </div>

          <div className="xl:col-span-3">
            <WalletTransactions />
          </div>
        </section>
      </div>
    </main>
  );
}