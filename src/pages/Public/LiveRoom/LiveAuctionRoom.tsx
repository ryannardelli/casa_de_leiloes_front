import { useState } from "react";
import { useParams } from "react-router-dom";

import { liveRoomMock } from "../../../mocks/home/live-room.mock";
import { LiveBidHistory } from "../../../components/domain/Home/LiveRoom/Details/LiveBidHistory/index.tsx";
import { LiveUserStatus } from "../../../components/domain/Home/LiveRoom/Details/LiveUserStatus/index.tsx";
import { LiveBidPanel } from "../../../components/domain/Home/LiveRoom/Details/LiveBidPanel/index.tsx";
import { LiveLotDetails } from "../../../components/domain/Home/LiveRoom/Details/LiveLotDetails.tsx/index.tsx";
import { LiveCountdown } from "../../../components/domain/Home/LiveRoom/Details/LiveCountdown.tsx/index.tsx";

export function LiveAuctionRoom() {
  const { id } = useParams<{ id: string }>();
  const [room, setRoom] = useState(liveRoomMock);

  function handleBid(amount: number) {
    const newBid = {
      id: `bid-${Date.now()}`,
      bidderName: room.currentUser.name,
      amount,
      createdAt: new Date().toISOString(),
      isCurrentUser: true,
    };

    setRoom((previousRoom) => ({
      ...previousRoom,
      currentBid: amount,
      totalBids: previousRoom.totalBids + 1,
      bids: [newBid, ...previousRoom.bids],
      currentUser: {
        ...previousRoom.currentUser,
        highestBid: amount,
        position: 1,
        isWinning: true,
      },
    }));
  }

  if (id !== room.lotId) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Lote não encontrado
        </h1>
        <p className="mt-2 text-gray-500">
          O lote solicitado não está disponível nesta sala.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Sala do lote ao vivo
        </h1>

        <p className="mt-2 text-gray-500">
          Lote: {id}
        </p>

        <p className="mt-2 text-gray-500">
          Acompanhe os lances e dispute este lote em tempo real.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <LiveLotDetails room={room} />
          <LiveBidHistory bids={room.bids} />
        </div>

        <div className="space-y-6">
          <LiveCountdown endsAt={room.endsAt} />
          <LiveUserStatus currentUser={room.currentUser} />

          <LiveBidPanel
            currentBid={room.currentBid}
            minimumIncrement={room.minimumIncrement}
            onBid={handleBid}
          />
        </div>
      </div>
    </div>
  );
}