import { Trophy } from "lucide-react";

export function MyWinsHeader() {
  return (
    <header>
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-gold">
          <Trophy size={22} />
        </div>

        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Meus arremates
          </h1>
        </div>
      </div>

      <p className="mt-3 max-w-2xl text-sm leading-6 text-text-muted">
        Consulte os lotes que você conquistou, confira os valores
        finais e compartilhe seus comprovantes de arremate.
      </p>
    </header>
  );
}