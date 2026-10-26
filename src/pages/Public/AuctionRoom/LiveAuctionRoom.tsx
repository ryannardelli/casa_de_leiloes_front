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

export function LiveAuctionRoom() {
  const { id } = useParams<{ id: string }>();
  const { statePublicLots } = usePublicLot();
  const { lots, loadingLots } = statePublicLots;

  const { state } = useAuth();
  const isAuth = state.isAuthenticated;
  const profileName = state.user?.profile.name;

  if (loadingLots) {
    return <LoadingAuth />;
  }

  const lot = lots.find((item) => item.id === Number(id));

  if (!lot) {
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
        <h1 className="text-3xl font-bold text-gray-900">
          Sala do lote
        </h1>

        <p className="mt-2 text-gray-500">
          Acompanhe os detalhes deste lote e os lances disponíveis.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <LiveLotDetails lot={lot} />
          <LiveBidHistory
            bids={[
              {
                id: 1,
                bidderName: "Carlos Mendes",
                amount: 1250,
                createdAt: "2026-10-26T20:15:00",
              },
              {
                id: 2,
                bidderName: "Ana Souza",
                amount: 1200,
                createdAt: "2026-10-26T20:14:30",
              },
              {
                id: 3,
                bidderName: "Lucas Oliveira",
                amount: 1100,
                createdAt: "2026-10-26T20:13:45",
              },
              {
                id: 4,
                bidderName: "Mariana Costa",
                amount: 1000,
                createdAt: "2026-10-26T20:12:10",
              },
              {
                id: 5,
                bidderName: "Pedro Santos",
                amount: 950,
                createdAt: "2026-10-26T20:10:00",
              },
            ]}
          />
        </div>

        <div className="space-y-6">
          <LiveCountdown endsAt={lot.endAt} />

          <LiveUserStatus
            currentUser={{
              isWinning: false,
              position: 3,
              highestBid: 5500,
            }}
        />

          {(isAuth && profileName === "Licitante") && (
            <LiveBidPanel
              currentBid={Number(lot.currentPrice || lot.startingPrice)}
              minimumIncrement={Number(lot.minimumIncrement)}
            />
        )}
        </div>
      </div>
    </div>
  );
}