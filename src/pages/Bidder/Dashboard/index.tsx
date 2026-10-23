import { AuctionPerformance } from "../../../components/domain/Bidder/dashboard/AuctionPerformance";
import { DashboardHeader } from "../../../components/domain/Bidder/dashboard/DashboardHeader";
import { DashboardStats } from "../../../components/domain/Bidder/dashboard/DashboardStats";
import { QuickActions } from "../../../components/domain/Bidder/dashboard/QuickActions";
import { RecentLots } from "../../../components/domain/Bidder/dashboard/RecentLots";

export function Dashboard() {
  return (
    <main className="min-h-screen bg-background px-4 py-6 text-text sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <DashboardHeader />

        <DashboardStats />

        <section className="grid grid-cols-1 gap-5 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <AuctionPerformance />
          </div>

          <QuickActions />
        </section>

        <RecentLots />
      </div>
    </main>
  );
}