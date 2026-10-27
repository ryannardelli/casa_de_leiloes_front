export const statusConfig = {
  LIVE: {
    label: "Ao vivo",
    className: "bg-accent/10 text-accent",
  },
  SCHEDULED: {
    label: "Agendado",
    className: "bg-gold/15 text-gold",
  },
  ENDED: {
    label: "Encerrado",
    className: "bg-muted text-text-muted",
  },
  CLOSED: {
    label: "Encerrado",
    className: "bg-muted text-text-muted",
  },
  CANCELLED: {
    label: "Cancelado",
    className: "bg-muted text-text-muted",
  },
} as const;

export type StatusType = keyof typeof statusConfig;

export function getStatusConfig(status: string) {
  return (
    statusConfig[status as StatusType] ?? {
      label: status,
      className: "bg-muted text-text-muted",
    }
  );
}