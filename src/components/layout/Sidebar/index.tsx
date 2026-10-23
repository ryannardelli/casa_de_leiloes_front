import { LogOut } from "lucide-react";

import { profileMenus } from "../../../mocks/navigation.mock";
import type { UserRole } from "../../../mocks/navigation.mock";

import { SidebarHeader } from "./SidebarHeader";
import { SidebarItem } from "./SidebarItem";

interface SidebarProps {
  role: UserRole;
}

export function Sidebar({ role }: SidebarProps) {
  const profile = profileMenus[role];

  return (
    <aside className="fixed left-0 top-0 flex h-screen w-64 flex-col border-r border-border bg-surface">
      <SidebarHeader role={role} />

      <nav className="flex-1 overflow-y-auto px-4 py-6">
        <div className="space-y-1">
          {profile.items.map((menu) => (
            <SidebarItem
              key={menu.path}
              label={menu.label}
              icon={menu.icon}
              href={menu.path}
            />
          ))}
        </div>
      </nav>

      <div className="border-t border-border p-4">
        <button
          type="button"
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
