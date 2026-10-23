import { MyWinsHeader } from "../../../components/domain/Bidder/myWins/MyWinsHeader";
import { MyWinsList } from "../../../components/domain/Bidder/myWins/MyWinsList";
import { MyWinsStats } from "../../../components/domain/Bidder/myWins/MyWinsStats";

export function MyWins() {
  return (
    <main className="min-h-screen bg-background px-4 py-6 text-text sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <MyWinsHeader />

        <MyWinsStats />

        <MyWinsList />
      </div>
    </main>
  );
}