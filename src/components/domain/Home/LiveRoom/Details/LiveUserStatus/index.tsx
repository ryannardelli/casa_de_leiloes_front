import { CheckCircle2, TrendingDown } from "lucide-react";
import type { LiveRoom } from "../../../../../../mocks/home/live-room.mock";

interface LiveUserStatusProps {
  currentUser: LiveRoom["currentUser"];
}

export function LiveUserStatus({ currentUser }: LiveUserStatusProps) {
  return (
    <div
      className={`rounded-xl border p-5 ${
        currentUser.isWinning
          ? "border-green-200 bg-green-50"
          : "border-red-200 bg-red-50"
      }`}
    >
      <div className="flex items-center gap-3">
        {currentUser.isWinning ? (
          <CheckCircle2 className="text-green-600" size={24} />
        ) : (
          <TrendingDown className="text-red-600" size={24} />
        )}

        <div>
          <p
            className={`font-bold ${
              currentUser.isWinning ? "text-green-700" : "text-red-700"
            }`}
          >
            {currentUser.isWinning
              ? "Você está ganhando!"
              : "Você foi superado!"}
          </p>

          <p className="text-sm text-gray-600">
            Sua posição: {currentUser.position}º lugar
          </p>
        </div>
      </div>

      <p className="mt-3 text-sm text-gray-600">
        Seu maior lance:{" "}
        {currentUser.highestBid.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
    </div>
  );
}