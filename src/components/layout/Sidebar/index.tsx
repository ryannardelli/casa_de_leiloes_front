import { HelpCircle, LogOut } from "lucide-react";

import { SidebarHeader } from "./SidebarHeader";
import { SidebarItem } from "./SidebarItem";
import { useAuth } from "../../../hooks/useAuth";
import { useProfile } from "../../../hooks/useProfile";
import { MenuSkeletonList } from "../../ui/shared/Loading/MenuSkeletonList";
import { AVAILABLE_ICONS } from "../../../constants/availableIcons";

export function Sidebar() {
  const { state, logout } = useAuth();
  const { stateProfile } = useProfile();

  const menus = stateProfile.menusByLoggedUser ?? [];
  const isLoading =
    state.loading || stateProfile.loadingMenusByLoggedUser;

  const profileName = state.user?.profile?.name;

  return (
    <aside className="fixed left-0 top-0 flex h-screen w-64 flex-col border-r border-border bg-surface">
      <SidebarHeader role={profileName ?? ""} />

      <nav className="flex-1 overflow-y-auto px-4 py-6">
        <div className="space-y-1">
          {isLoading ? (
            <MenuSkeletonList items={5} />
          ) : menus.length === 0 ? (
            <p className="px-4 text-sm text-text-muted">
              Nenhum menu disponível
            </p>
          ) : (
            menus.map((menu) => {
              const Icon =
                AVAILABLE_ICONS[menu.icon as IconName] || HelpCircle;

              return (
                <SidebarItem
                  key={menu.id || menu.route}
                  label={menu.name}
                  icon={Icon}
                  href={menu.route}
                />
              );
            })
          )}
        </div>
      </nav>

      <div className="border-t border-border p-4">
        <button
          type="button"
          onClick={logout}
          className="
            group flex w-full items-center gap-3
            rounded-lg px-4 py-3
            text-sm font-medium text-text-muted
            transition-colors
            hover:bg-muted hover:text-accent
            cursor-pointer
          "
        >
          <LogOut
            size={20}
            className="text-text-muted transition-colors group-hover:text-accent"
          />

          <span>Sair</span>
        </button>
      </div>
    </aside>
  );
}