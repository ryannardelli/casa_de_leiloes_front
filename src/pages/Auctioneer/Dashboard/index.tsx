import { AuctioneerDashboardHeader } from "../../../components/domain/Auctioneer/dashboard/AuctioneerDashboardHeader";
import { AuctioneerDashboardStats } from "../../../components/domain/Auctioneer/dashboard/AuctioneerDashboardStats";
import { AuctioneerQuickActions } from "../../../components/domain/Auctioneer/dashboard/AuctioneerQuickActions";
import { AuctioneerRecentLots } from "../../../components/domain/Auctioneer/dashboard/AuctioneerRecentLots";

export function Dashboard() {
  return (
    <main className="min-h-screen bg-background px-4 py-6 text-text sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <AuctioneerDashboardHeader />

        <AuctioneerDashboardStats />

        <section className="grid grid-cols-1 gap-5">
          <AuctioneerQuickActions />
        </section>

        <AuctioneerRecentLots />
      </div>
    </main>
  );
}