import { useState } from "react";
import type { MyLot } from "../../../mocks/auctioneer/my-lots.mock";
import { MyLotsHeader } from "../../../components/domain/Auctioneer/myLots/MyLotsHeader";
import { MyLotsStats } from "../../../components/domain/Auctioneer/myLots/MyLotsStats";
import { MyLotsList } from "../../../components/domain/Auctioneer/myLots/MyLotsList";

import { myLots as initialLots } from "../../../mocks/auctioneer/my-lots.mock";
import { useAuctioneerLot } from "../../../hooks/useAuctioneerLot";

export function MyLots() {
  const [lots, setLots] = useState<MyLot[]>(initialLots);
  const { stateAuctioneerLot } = useAuctioneerLot();
  console.log(stateAuctioneerLot);

  function handleCancelLot(lotId: string) {
    setLots((currentLots) =>
      currentLots.map((lot) =>
        lot.id === lotId &&
        lot.totalBids === 0 &&
        (lot.status === "LIVE" || lot.status === "SCHEDULED")
          ? { ...lot, status: "CANCELED" }
          : lot,
      ),
    );
  }

  return (
    <main className="min-h-screen bg-background px-4 py-6 text-text sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <MyLotsHeader />

        <MyLotsStats lots={lots} />

        <MyLotsList
          lots={lots}
          onCancel={handleCancelLot}
        />
      </div>
    </main>
  );
}