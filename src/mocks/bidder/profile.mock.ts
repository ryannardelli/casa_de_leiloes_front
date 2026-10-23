export type ProfileRole = "AUCTIONEER" | "BIDDER";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: ProfileRole;
  createdAt: string;
}

export const profileMock: UserProfile = {
  id: "user-001",
  name: "Ryan Nardelli",
  email: "ryan@example.com",
  phone: "(11) 99999-9999",
  role: "BIDDER",
  createdAt: "2026-08-15T10:00:00",
};