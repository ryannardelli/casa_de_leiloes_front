import { PackagePlus } from "lucide-react";
import { BackButton } from "../../../../ui/shared/Button/BackButton";

export function CreateLotHeader() {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-white dark:text-background">
          <PackagePlus size={22} />
        </div>

        <div>
          <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
            Criar novo lote
          </h1>

          <p className="mt-2 text-sm leading-6 text-text-muted">
            Selecione uma obra e configure os detalhes do leilão.
          </p>
        </div>
      </div>

      <BackButton />
    </header>
  );
}