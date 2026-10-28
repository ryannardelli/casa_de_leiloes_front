export function ResultsHeader() {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
          Resultados dos leilões
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-text-muted">
          Consulte os resultados dos seus lotes encerrados.
        </p>
      </div>
    </header>
  );
}