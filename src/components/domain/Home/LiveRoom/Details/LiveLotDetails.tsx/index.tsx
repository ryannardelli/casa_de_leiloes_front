import { Gavel } from "lucide-react";
import type { LiveRoom } from "../../../../../../mocks/home/live-room.mock";

interface LiveLotDetailsProps {
  room: LiveRoom;
}

export function LiveLotDetails({ room }: LiveLotDetailsProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <img
        src={room.imageUrl}
        alt={room.title}
        className="h-80 w-full object-cover"
      />

      <div className="space-y-4 p-6">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
          {room.category}
        </span>

        <h2 className="text-2xl font-bold text-gray-900">
          {room.title}
        </h2>

        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div>
            <p className="text-sm text-gray-500">Lance atual</p>
            <p className="text-3xl font-bold text-gray-900">
              {room.currentBid.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Gavel size={18} />
            {room.totalBids} lances
          </div>
        </div>
      </div>
    </div>
  );
}