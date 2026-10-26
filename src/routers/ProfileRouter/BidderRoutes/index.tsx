import type { RouteObject } from "react-router-dom";

import MainTemplate from "../../../templates/MainTemplate";
import { Dashboard } from "../../../pages/Bidder/Dashboard";
import { MyBids } from "../../../pages/Bidder/MyBids";
import { Wallet } from "../../../pages/Bidder/Wallet";
import { MyWins } from "../../../pages/Bidder/MyWins";
import { Profile } from "../../../pages/Bidder/Profile";
import { Lots } from "../../../pages/Bidder/Lots";

export const BidderRoutes: RouteObject[] = [
  {
    element: <MainTemplate />,
    children: [
      {
        path: "/bidder/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/bidder/my-bids",
        element: <MyBids />,
      },
      {
        path: "/bidder/lots",
        element: <Lots />,
      },
      {
        path: "/bidder/wallet",
        element: <Wallet />,
      },
      {
        path: "/bidder/my-wins",
        element: <MyWins />,
      },
      {
        path: "/bidder/profile",
        element: <Profile />,
      },
    ],
  },
];