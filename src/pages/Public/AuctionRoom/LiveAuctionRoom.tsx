import { useParams } from "react-router-dom";
import { usePublicLot } from "../../../hooks/usePublicLot";
import { LoadingAuth } from "../../../components/ui/shared/Loading/general/LoadingAuth";
import { LiveLotDetails } from "../../../components/domain/Home/LiveRoom/Details/LiveLotDetails.tsx";
import { LiveBidHistory } from "../../../components/domain/Home/LiveRoom/Details/LiveBidHistory";
import { LiveCountdown } from "../../../components/domain/Home/LiveRoom/Details/LiveCountdown.tsx";
import { LiveBidPanel } from "../../../components/domain/Home/LiveRoom/Details/LiveBidPanel";
import { LiveUserStatus } from "../../../components/domain/Home/LiveRoom/Details/LiveUserStatus";
import { useAuth } from "../../../hooks/useAuth.ts";
import { BackButton } from "../../../components/ui/shared/Button/BackButton/index.tsx";
import { useEffect, useState } from "react";
import { socket } from "../../../services/socket.ts";
import type { BidUpdatedEvent, LiveLot } from "../../../models/Bid.ts";
import { useBids } from "../../../hooks/useBids.ts";

export function LiveAuctionRoom() {
  const { id } = useParams<{ id: string }>();

  const { statePublicLots } = usePublicLot();
  const { lots, loadingLots } = statePublicLots;

  const { state } = useAuth();

  const isAuth = state.isAuthenticated;
  const profileName = state.user?.profile.name;
  const currentUserId = state.user?.id ? Number(state.user.id) : null;

  const { stateBids, loadBidsById } = useBids();

  const lot = lots.find((item) => item.id === Number(id));

  const [liveLot, setLiveLot] = useState<LiveLot | null>(null);
  const [bidsList, setBidsList] = useState<any[]>([]);

  useEffect(() => {
    if (!id || !Number.isInteger(Number(id)) || Number(id) <= 0) {
      return;
    }

    loadBidsById(Number(id)).catch(() => undefined);
  }, [id, loadBidsById]);

  useEffect(() => {
    if (stateBids.selectedLot) {
      setBidsList(stateBids.selectedLot);
    }
  }, [stateBids.selectedLot]);

  useEffect(() => {
    if (!lot) return;

    setLiveLot({
      id: lot.id,
      currentPrice: Number(lot.currentPrice ?? lot.startingPrice),
      startingPrice: Number(lot.startingPrice),
      minimumIncrement: Number(lot.minimumIncrement),
      endAt: lot.endAt,
      status: lot.status,
    });
  }, [lot]);

  useEffect(() => {
    if (!id || !Number.isInteger(Number(id)) || Number(id) <= 0) {
      return;
    }

    const lotId = Number(id);

    function joinLot() {
      socket.emit("lot:join", { lotId });
    }

    function handleBidUpdated(data: BidUpdatedEvent) {
      if (Number(data.bid?.lotId ?? data.lot?.id) !== lotId) return;

      setLiveLot((current) => {
        if (!current) return current;

        return {
          ...current,
          currentPrice: Number(data.lot.currentPrice),
          endAt: data.lot.endAt,
          status: data.lot.status,
        };
      });

      if (data.bid) {
        setBidsList((prevBids) => {
          if (prevBids.some((b) => Number(b.id) === Number(data.bid.id))) {
            return prevBids;
          }
          return [data.bid, ...prevBids];
        });
      }
    }

    socket.on("connect", joinLot);
    socket.on("bid:updated", handleBidUpdated);

    socket.on("connect_error", (error) => {
      console.error("[Socket] Erro de conexão:", error.message);
    });

    if (socket.connected) {
      joinLot();
    } else {
      socket.connect();
    }

    return () => {
      socket.emit("lot:leave", { lotId });
      socket.off("connect", joinLot);
      socket.off("bid:updated", handleBidUpdated);
    };
  }, [id]);

  const currentUserBids = bidsList.filter(
    (bid) => Number(bid.bidderId) === currentUserId
  );

  const userHighestBid =
    currentUserBids.length > 0
      ? Math.max(...currentUserBids.map((bid) => Number(bid.amount)))
      : null;

  const highestBidInRoom = bidsList[0];

  const isWinning = Boolean(
    currentUserId &&
      userHighestBid &&
      highestBidInRoom &&
      Number(highestBidInRoom.bidderId) === currentUserId
  );

  if (loadingLots) {
    return <LoadingAuth />;
  }

  if (!lot || !liveLot) {
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
      <BackButton />

      <div>
        <h1 className="text-3xl font-bold text-gray-900">Sala do lote</h1>
        <p className="mt-2 text-gray-500">
          Acompanhe os detalhes deste lote e os lances disponíveis.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <LiveLotDetails
            lot={{
              ...lot,
              currentPrice: liveLot.currentPrice,
              endAt: liveLot.endAt,
              status: liveLot.status,
            }}
          />

          <LiveBidHistory
            bids={bidsList.map((bid) => ({
              id: bid.id,
              bidderName: `Licitante #${bid.bidderId}`,
              amount: Number(bid.amount),
              createdAt: bid.createdAt,
              isCurrentUser: Number(bid.bidderId) === currentUserId,
            }))}
          />
        </div>

        <div className="space-y-6">
          <LiveCountdown endsAt={liveLot.endAt} />

          <LiveUserStatus
            currentUser={{
              isWinning: isWinning,
              position: isWinning ? 1 : userHighestBid ? 2 : null,
              highestBid: userHighestBid,
              hasBidded: currentUserBids.length > 0,
            }}
          />

          {isAuth && profileName === "Licitante" && (
            <LiveBidPanel
              lotId={liveLot.id}
              currentBid={liveLot.currentPrice}
              minimumIncrement={liveLot.minimumIncrement}
            />
          )}
        </div>
      </div>
    </div>
  );
}