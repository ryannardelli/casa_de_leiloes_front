export function DashboardHeader() {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Visão geral
        </h1>
        
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-muted">
          Acompanhe seus lances, monitore os leilões em andamento e consulte
          suas arrematações. Tenha uma visão completa da sua participação
          e dos resultados conquistados.
        </p>
      </div>
    </header>
  );
}