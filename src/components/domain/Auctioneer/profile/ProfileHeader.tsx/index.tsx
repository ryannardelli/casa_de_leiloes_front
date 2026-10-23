import { UserRound } from "lucide-react";

export function ProfileHeader() {
  return (
    <header className="mb-8">
      <div className="mb-3 flex items-center gap-3">
        <div className="rounded-xl bg-primary/10 p-3 text-primary">
          <UserRound size={24} />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-text">
            Meu perfil
          </h1>

          <p className="text-sm text-text-muted">
            Gerencie suas informações pessoais e sua conta.
          </p>
        </div>
      </div>
    </header>
  );
}