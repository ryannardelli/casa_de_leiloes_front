import { useState } from "react";
import { profileMock, type UserProfile } from "../../../mocks/auctioneer/profile.mock";
import { ProfileHeader } from "../../../components/domain/Auctioneer/profile/ProfileHeader.tsx";
import { ProfileSummary } from "../../../components/domain/Auctioneer/profile/ProfileSummary/index.tsx";
import { ProfileSecurity } from "../../../components/domain/Auctioneer/profile/ProfileSecurity/index.tsx";
import { ProfileForm } from "../../../components/domain/Auctioneer/profile/ProfileForm.tsx/index.tsx";

export function Profile() {
  const [profile, setProfile] = useState<UserProfile>(profileMock);

  function handleSave(
    data: Pick<UserProfile, "name" | "email" | "phone">
  ) {
    setProfile((currentProfile) => ({
      ...currentProfile,
      ...data,
    }));
  }

  return (
    <main className="mx-auto w-full max-w-7xl p-4 sm:p-6 lg:p-8">
      <ProfileHeader />

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-1">
          <ProfileSummary profile={profile} />
          <ProfileSecurity />
        </div>

        <div className="lg:col-span-2">
          <ProfileForm
            profile={profile}
            onSave={handleSave}
          />
        </div>
      </div>
    </main>
  );
}