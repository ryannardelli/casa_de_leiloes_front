import { useState } from "react";
import { profileMock, type UserProfile } from "../../../mocks/bidder/profile.mock";
import { ProfileHeader } from "../../../components/domain/Bidder/profile/ProfileHeader";
import { ProfileSummary } from "../../../components/domain/Bidder/profile/ProfileSummary";
import { ProfileSecurity } from "../../../components/domain/Bidder/profile/ProfileSecurity";
import { ProfileForm } from "../../../components/domain/Bidder/profile/ProfileForm";

export function Profile() {
  const [profile, setProfile] = useState<UserProfile>(profileMock);

  function handleSave(
    data: Pick<UserProfile, "name" | "email" | "phone">,
  ) {
    setProfile((currentProfile) => ({
      ...currentProfile,
      ...data,
    }));
  }

  return (
    <main className="min-h-screen bg-background px-4 py-6 text-text sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
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
      </div>
    </main>
  );
}