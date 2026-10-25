import { Radio } from "lucide-react";
import { LiveLotList } from "../../../components/domain/Home/LiveRoom/List/LiveLotLis";
import { activeLotsMock } from "../../../mocks/auctioneer/active-lots.mock";

export function AuctionRoom() {
  return (
    <div className="mx-auto max-w-7xl space-y-6 p-6">
      <div>
        <div className="mb-3 flex items-center gap-2">
          <Radio size={20} className="text-red-600" />

          <span className="text-sm font-semibold uppercase tracking-wider text-red-600">
            Leilões ao vivo
          </span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900">
          Salas de leilão
        </h1>

        <p className="mt-2 text-gray-500">
          Explore os lotes disponíveis e participe dos lances ao vivo.
        </p>
      </div>

      <LiveLotList lots={activeLotsMock} />
    </div>
  );
}