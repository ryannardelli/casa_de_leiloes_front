import type { LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useProfile } from "../../../../hooks/useProfile";

interface SidebarItemProps {
  label: string;
  icon: LucideIcon;
  href: string;
}

export function SidebarItem({
  label,
  icon: Icon,
  href,
}: SidebarItemProps) {
  const { stateProfile } = useProfile();
  console.log(stateProfile);

  return (
    <NavLink
      to={href}
      end
      className={({ isActive }) => `
        group flex w-full items-center gap-3
        rounded-lg px-4 py-3
        text-sm font-medium
        transition-colors
        cursor-pointer
        ${
          isActive
            ? "bg-primary text-surface"
            : "text-text-muted hover:bg-muted hover:text-primary"
        }
      `}
    >
      {({ isActive }) => (
        <>
          <Icon
            size={20}
            className={`
              transition-colors
              ${
                isActive
                  ? "text-gold"
                  : "text-text-muted group-hover:text-primary"
              }
            `}
          />

          <span>{label}</span>
        </>
      )}
    </NavLink>
  );
}
