import { ProfileHeader } from "../../../components/domain/Auctioneer/profile/ProfileHeader.tsx";
import { ProfileSummary } from "../../../components/domain/Auctioneer/profile/ProfileSummary/index.tsx";
import { useAuth } from "../../../hooks/useAuth.ts";

export function Profile() {
  const { state } = useAuth();
  const user = state.user;

  if (!user) {
    return null;
  }

  return (
    <main className="min-h-screen w-full bg-background px-4 py-8 text-text sm:px-6 lg:px-8">
        <ProfileHeader />
        <section className="mx-auto w-full max-w-2xl">
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
            <ProfileSummary profile={user} />
          </div>
        </section>
    </main>
  );
}