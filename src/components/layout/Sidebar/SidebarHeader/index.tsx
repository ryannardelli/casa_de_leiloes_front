import { Gavel } from "lucide-react";

interface SidebarHeaderProps {
  role: "LEILOEIRO" | "LICITANTE";
}

export function SidebarHeader({ role }: SidebarHeaderProps) {
  const subtitle =
    role === "LEILOEIRO"
      ? "Painel do Leiloeiro"
      : "Painel do Licitante";

  return (
    <div className="flex h-20 items-center gap-3 border-b border-border px-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-sm shadow-primary/20">
        <Gavel className="h-5 w-5 text-gold" strokeWidth={2.2} />
      </div>

      <div className="min-w-0">
        <h1 className="text-base font-bold tracking-tight text-text">
          Arre<span className="text-accent">mata</span>
        </h1>

        <span className="text-xs font-medium text-text-muted">
          {subtitle}
        </span>
      </div>
    </div>
  );
}
