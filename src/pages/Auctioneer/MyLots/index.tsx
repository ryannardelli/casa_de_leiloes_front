import { MyLotsHeader } from "../../../components/domain/Auctioneer/myLots/MyLotsHeader";
import { MyLotsStats } from "../../../components/domain/Auctioneer/myLots/MyLotsStats";
import { MyLotsList } from "../../../components/domain/Auctioneer/myLots/MyLotsList";
import { useAuctioneerLot } from "../../../hooks/useAuctioneerLot";

export function MyLots() {
  const {
    stateAuctioneerLot,
    cancelLot,
  } = useAuctioneerLot();

  const { lots, loadingLots } = stateAuctioneerLot;

  return (
    <main className="min-h-screen bg-background px-4 py-6 text-text sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <MyLotsHeader />

        <MyLotsStats lots={lots} />

        <MyLotsList
          lots={lots}
          loading={loadingLots}
          onCancel={cancelLot}
        />
      </div>
    </main>
  );
}