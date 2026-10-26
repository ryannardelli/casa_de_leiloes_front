import { useEffect, useState } from "react";
import { Clock3 } from "lucide-react";
import { formatRemainingTime } from "../../../../../../utils/formatRemainingTime";

interface LiveCountdownProps {
  endsAt: string;
}

export function LiveCountdown({ endsAt }: LiveCountdownProps) {
  const [remainingTime, setRemainingTime] = useState(() =>
    Math.max(0, new Date(endsAt).getTime() - Date.now())
  );

  useEffect(() => {
    const updateRemainingTime = () => {
      setRemainingTime(
        Math.max(0, new Date(endsAt).getTime() - Date.now())
      );
    };

    updateRemainingTime();

    const interval = setInterval(updateRemainingTime, 1000);

    return () => clearInterval(interval);
  }, [endsAt]);

  return (
    <div className="flex items-center gap-3 rounded-xl border border-orange-200 bg-orange-50 p-4">
      <Clock3 className="text-orange-600" size={22} />

      <div>
        <p className="text-sm text-gray-600">Tempo restante</p>

        <p className="text-xl font-bold tabular-nums text-orange-700">
          {formatRemainingTime(remainingTime)}
        </p>
      </div>
    </div>
  );
}