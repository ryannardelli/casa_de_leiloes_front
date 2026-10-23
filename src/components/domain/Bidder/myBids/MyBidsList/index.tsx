import { useMemo, useState } from "react";
import { Gavel } from "lucide-react";
import { myBids, type MyBidStatus } from "../../../../../mocks/bidder/myBids.mock";
import { MyBidsFilters } from "../MyBidsFilters";
import { MyBidCard } from "../MyBidCard";

export function MyBidsList() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("ALL");

  const filteredBids = useMemo(() => {
    return myBids.filter((bid) => {
      const matchesSearch = bid.title
        .toLowerCase()
        .includes(search.trim().toLowerCase());

      const matchesStatus =
        status === "ALL" || bid.status === (status as MyBidStatus);

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  return (
    <section className="space-y-5">
      <div>
        <h2 className="text-lg font-semibold">Histórico de participação</h2>
        <p className="mt-1 text-sm text-text-muted">
          Consulte os leilões em andamento e os resultados anteriores.
        </p>
      </div>

      <MyBidsFilters
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
      />

      {filteredBids.length > 0 ? (
        <div className="space-y-4">
          {filteredBids.map((bid) => (
            <MyBidCard key={bid.id} bid={bid} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center rounded-2xl border border-dashed border-border bg-surface px-6 py-12 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-text-muted">
            <Gavel size={22} />
          </div>

          <h3 className="mt-4 font-semibold">
            Nenhum lance encontrado
          </h3>

          <p className="mt-2 max-w-sm text-sm text-text-muted">
            Tente alterar os filtros ou explore os leilões disponíveis.
          </p>
        </div>
      )}
    </section>
  );
}