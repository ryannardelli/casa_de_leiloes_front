import { dashboardStats } from "../../../../../mocks/bidder/dashboard.mock";
import { StatCard } from "../StatCard";

export function DashboardStats() {
  return (
    <section
      aria-label="Indicadores do negócio"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
    >
      {dashboardStats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </section>
  );
}