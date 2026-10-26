
import React from "react";
import type { LucideIcon } from "lucide-react";
import { Gavel } from "lucide-react";

interface LotEmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export const LotEmptyState: React.FC<LotEmptyStateProps> = ({
  icon: Icon = Gavel,
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={`
        flex
        flex-col
        items-center
        justify-center
        gap-4
        rounded-xl
        border
        border-dashed
        border-border
        bg-surface
        p-8
        text-center
        ${className}
      `}
    >
      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-muted
          text-accent
        "
      >
        <Icon size={32} />
      </div>

      <p className="text-lg font-semibold text-text">
        {title}
      </p>

      <p className="max-w-md text-sm leading-6 text-text-muted">
        {description}
      </p>
    </div>
  );
};
