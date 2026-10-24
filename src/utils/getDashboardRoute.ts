import type { ProfileName } from "../models/Profile";

export function getDashboardRoute(profileName?: ProfileName | string): string {
  switch (profileName) {
    case "Licitante":
      return "/bidder/dashboard";
    case "Leiloeiro":
      return "/auctioneer/dashboard";
    default:
      return "/";
  }
}