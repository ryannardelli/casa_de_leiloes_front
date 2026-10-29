import { useMemo, useState } from "react";
import { Gavel } from "lucide-react";

import { MyBidsFilters, type BidStatusFilter } from "../MyBidsFilters";
import { MyBidCard } from "../MyBidCard";
import { useBids } from "../../../../../hooks/useBids";
import { MyBidCardSkeleton } from "../../../../ui/shared/Loading/bidder/my-bids/MyBidCardSkeleton";

export function MyBidsList() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<BidStatusFilter>("ALL");

  const { stateBids } = useBids();
  const myBids = stateBids.myBids;
  const loading = stateBids.loadingMyBids;

  
const filteredBids = useMemo(() => {
  return myBids.filter((bid) => {
    const title = bid.lot?.title ?? "";
    const lotStatus = bid.lot?.status?.toUpperCase().trim();

    const matchesSearch = title
      .toLowerCase()
      .includes(search.trim().toLowerCase());

    const matchesStatus =
      status === "ALL" || lotStatus === status;

    return matchesSearch && matchesStatus;
  });
}, [myBids, search, status]);

  return (
    <section className="space-y-5">
      <MyBidsFilters
        search={search}
        status={status}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
      />

      {loading ? (
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <MyBidCardSkeleton key={index} />
          ))}
        </div>
      ) : filteredBids.length > 0 ? (
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