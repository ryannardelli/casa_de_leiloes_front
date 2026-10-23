import { MyBidsHeader } from "../../../components/domain/Bidder/myBids/MyBidsHeader";
import { MyBidsList } from "../../../components/domain/Bidder/myBids/MyBidsList";
import { MyBidsStats } from "../../../components/domain/Bidder/myBids/MyBidsStats";

export function MyBids() {
  return (
    <main className="min-h-screen bg-background px-4 py-6 text-text sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <MyBidsHeader />
        <MyBidsStats />
        <MyBidsList />
      </div>
    </main>
  );
}