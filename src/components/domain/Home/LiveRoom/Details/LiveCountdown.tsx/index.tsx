import { useEffect, useState } from "react";
import { Clock3 } from "lucide-react";

interface LiveCountdownProps {
  endsAt: string;
}

export function LiveCountdown({ endsAt }: LiveCountdownProps) {
  const [remainingTime, setRemainingTime] = useState(() =>
    Math.max(0, new Date(endsAt).getTime() - Date.now())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(
        Math.max(0, new Date(endsAt).getTime() - Date.now())
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [endsAt]);

  const totalSeconds = Math.floor(remainingTime / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className="flex items-center gap-3 rounded-xl border border-orange-200 bg-orange-50 p-4">
      <Clock3 className="text-orange-600" size={22} />

      <div>
        <p className="text-sm text-gray-600">Tempo restante</p>
        <p className="text-xl font-bold tabular-nums text-orange-700">
          {String(hours).padStart(2, "0")}:
          {String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}