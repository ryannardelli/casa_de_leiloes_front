import { CheckCircle2, TrendingDown, MinusCircle } from "lucide-react";
import { useAuth } from "../../../../../../hooks/useAuth";

export interface LiveUserStatusData {
  isWinning: boolean;
  position: number | null;
  highestBid: number | null;
  hasBidded?: boolean;
}

interface LiveUserStatusProps {
  currentUser: LiveUserStatusData;
}

export function LiveUserStatus({ currentUser }: LiveUserStatusProps) {
  const { state } = useAuth();
  const isAuth = state.isAuthenticated;

  const { isWinning, position, highestBid, hasBidded } = currentUser;

  if (!isAuth) {
    return null;
  }

  if (!hasBidded || highestBid === null || highestBid === undefined) {
    return (
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
        <div className="flex items-center gap-3">
          <MinusCircle className="text-gray-400" size={24} />
          <div>
            <p className="font-bold text-gray-700">Você ainda não deu lances</p>
            <p className="text-sm text-gray-500">
              Faça um lance para entrar na disputa.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const formattedBid = highestBid.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div
      className={`rounded-xl border p-5 transition-colors duration-300 ${
        isWinning ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"
      }`}
    >
      <div className="flex items-center gap-3">
        {isWinning ? (
          <CheckCircle2 className="text-green-600" size={24} />
        ) : (
          <TrendingDown className="text-red-600" size={24} />
        )}

        <div>
          <p
            className={`font-bold ${
              isWinning ? "text-green-700" : "text-red-700"
            }`}
          >
            {isWinning ? "Você está ganhando!" : "Você foi superado!"}
          </p>

          <p className="text-sm text-gray-600">
            Sua posição:{" "}
            {position
              ? `${position}º lugar`
              : isWinning
              ? "1º lugar"
              : "Superado"}
          </p>
        </div>
      </div>

      <p className="mt-3 text-sm text-gray-600">
        Seu maior lance:{" "}
        <span className="font-semibold text-gray-900">{formattedBid}</span>
      </p>
    </div>
  );
}