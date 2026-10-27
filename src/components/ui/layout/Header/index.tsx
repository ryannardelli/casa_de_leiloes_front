import { Heart, Gavel, LogOut } from "lucide-react";
import { AuthButton } from "../../../domain/Auth/AuthButton";
import { useAuth } from "../../../../hooks/useAuth";
import { RouterLinks } from "../../shared/Links/RouterLinks";
import { getDashboardRoute } from "../../../../utils/getDashboardRoute";

export function Header() {
  const { state, logout } = useAuth();

  const isAuth = state.isAuthenticated;
  const profileName = state.user?.profile?.name;
  const dashboardRoute = getDashboardRoute(profileName);

  return (
    <header className="w-full border-b border-border bg-surface text-text">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <a href="/" className="flex shrink-0 items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-gold">
            <Gavel size={30} strokeWidth={1.2} />
          </div>

          <span className="text-xl font-extrabold leading-tight text-primary">
            Arremata
          </span>
        </a>

        <nav className="flex items-center gap-3 text-sm font-medium sm:gap-5">
          <a
            href="#"
            className="hidden text-text transition-colors hover:text-accent lg:block"
          >
            Como funciona?
          </a>

          <a
            href="#"
            className="hidden text-text transition-colors hover:text-accent lg:block"
          >
            Ajuda
          </a>

          <button
            type="button"
            aria-label="Favoritos"
            title="Favoritos"
            className="rounded-full p-2 text-text-muted transition-colors hover:bg-muted hover:text-accent"
          >
            <Heart size={19} strokeWidth={1.8} />
          </button>

          {isAuth ? (
            <>
              <RouterLinks
                href={dashboardRoute}
                className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-surface transition-colors hover:bg-primary/90"
              >
                Dashboard
              </RouterLinks>

              <button
                type="button"
                onClick={logout}
                aria-label="Sair da conta"
                title="Sair da conta"
                className="rounded-md p-2 text-text-muted transition-colors hover:bg-red-500/10 hover:text-red-500 cursor-pointer"
              >
                <LogOut size={18} strokeWidth={1.8} />
              </button>
            </>
          ) : (
            <AuthButton />
          )}
        </nav>
      </div>
    </header>
  );
}