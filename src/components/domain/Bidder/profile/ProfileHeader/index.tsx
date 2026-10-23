import { UserRound } from "lucide-react";

export function ProfileHeader() {
  return (
    <header>
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-accent">
          <UserRound size={22} />
        </div>

        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Meu perfil
          </h1>
        </div>
      </div>

      <p className="mt-3 max-w-2xl text-sm leading-6 text-text-muted">
        Gerencie suas informações pessoais e consulte os dados
        da sua conta no Arremata.
      </p>
    </header>
  );
}