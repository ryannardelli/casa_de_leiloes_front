import type { RouteObject } from "react-router-dom";

import MainTemplate from "../../../templates/MainTemplate";

import { Dashboard } from "../../../pages/Auctioneer/Dashboard";
import { MyLots } from "../../../pages/Auctioneer/MyLots";
import { CreateLot } from "../../../pages/Auctioneer/CreateLot";
import { Results } from "../../../pages/Auctioneer/Results";
import { Profile } from "../../../pages/Auctioneer/Profile";
import { ActiveLots } from "../../../pages/Auctioneer/ActiveLots";

export const AuctioneerRoutes: RouteObject[] = [
  {
    element: <MainTemplate />,
    children: [
      {
        path: "/auctioneer/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/auctioneer/lots",
        element: <MyLots />,
      },
      {
        path: "/auctioneer/lots/new",
        element: <CreateLot />,
      },
      {
        path: "/auctioneer/active-auctions",
        element: <ActiveLots />,
      },
      {
        path: "/auctioneer/results",
        element: <Results />,
      },
      {
        path: "/auctioneer/profile",
        element: <Profile />,
      },
    ],
  },
];
