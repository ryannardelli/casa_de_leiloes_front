import { Gavel, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { RouterLinks } from "../../../ui/shared/Links/RouterLinks";

interface SidebarHeaderProps {
  role: "Licitante" | "Leiloeiro";
}

export function SidebarHeader({ role }: SidebarHeaderProps) {
  const subtitle =
    role === "Licitante"
      ? "Painel do Licitante"
      : "Painel do Leiloeiro";

  return (
    <div className="flex h-20 items-center gap-3 border-b border-border px-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-sm shadow-primary/20">
        <Gavel className="h-5 w-5 text-background" strokeWidth={2.2} />
      </div>

      <div className="min-w-0">
        <h1 className="text-base font-bold tracking-tight text-text">
          Arre<span className="text-accent">mata</span>
        </h1>

        <span className="text-xs font-medium text-text-muted">
          {subtitle}
        </span>
      </div>

      <RouterLinks 
        href="/" 
        title="Página Inicial"
        className="flex h-9 w-9 items-center justify-center rounded-lg text-text-muted hover:bg-muted hover:text-primary transition-colors"
      >
        <Home size={18} />
      </RouterLinks>
    </div>
  );
}
